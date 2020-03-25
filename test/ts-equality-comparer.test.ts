import { deepEqualityComparer } from '../src/ts-equality-comparer'
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    const obj1 = [
      {
        foo: [1, 2, { bar: { monkey: 4, gorilla: 'ugh' } }]
      },
      {
        woo: ['1,2', { bar: { cat: 4 } }]
      }
    ]
    const obj2 = [
      {
        foo: [1, 2, { bar: { monkey: 4, gorilla: 'ugh' } }]
      },
      {
        woo: ['1,2', { bar: { cat: 4 } }]
      }
    ]
    const obj3 = [
      {
        foo: [1, 2, { bar: { monkey: 4, lemur: 'ugh' } }]
      },
      {
        woo: ['1,2', { bar: { cat: 4 } }]
      }
    ]
    const obj4 = [
      {
        foo: [1, 2, { bar: { gorilla: 'ugh', monkey: 4 } }]
      },
      {
        woo: ['1,2', { bar: { cat: 4 } }]
      }
    ]
    const obj5 = [
      {
        foo: [1, 2, { bar: { gorilla: 'ugh', monkey: 4, cat: false } }]
      },
      {
        woo: ['1,2', { bar: { cat: 4 } }]
      }
    ]

    expect(deepEqualityComparer.equals(obj1, obj2)).toBeTruthy()
    expect(deepEqualityComparer.equals(obj1, obj4)).toBeTruthy()
    expect(deepEqualityComparer.equals(obj1, obj3)).toBeFalsy()
    expect(deepEqualityComparer.equals(obj4, obj5)).toBeFalsy()
  })
})
