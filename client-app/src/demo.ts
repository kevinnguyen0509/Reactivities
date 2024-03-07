/*let data: number | string = 42
data = '42'
console.log(data)*/

export interface Duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void
}

const duct1 : Duck = {
    name: 'Huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

const duct2 : Duck = {
    name: 'Ducky',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

export const ducks = [duct1, duct2]