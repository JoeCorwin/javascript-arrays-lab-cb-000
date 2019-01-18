var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name) {
  kittens.shift(name)
  kittens.unshift(name)
  return kittens
}
