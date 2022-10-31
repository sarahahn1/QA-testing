 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('identity property', () => {
    expect(2).toBe(2)
  })

  test('first name should be Patten', () => {
    expect(testData.firstName).toBe("Patten")
  })

  describe('formatTitle', () => {
    test ('returns a string', () => {
      expect(typeof formatTitle(testData.title)).toBe('string')
    })

    test('formats title with individual words capitalized', () => {
       expect(formatTitle(testData.title).tobe('Nulla Ac'))
       expect(formatTitle('hi there luke!')).tobe('hi thereluke!')
    })

  })

  obj1 = {
    name: 'Kajsia'
  }

  obj2 = {
    name: 'Kajsia'

  }
  test('obj1 is obj2', () => {
    expect (obj1).toBe(obj2)
      })