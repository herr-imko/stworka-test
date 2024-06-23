let input = [
	{
		length: 1665,
		angle: 0
	},
	{
		length: 947,
		angle: 90
	},
	{
		length: 557,
		angle: 0
	},
	{
		length: 1300,
		angle: 90
	},
	{
		length: 2225,
		angle: 180
	},
	{
		length: 2239,
		angle: 270
	},
]

let path = [[0, 0]]

input.forEach(step => {
	let axis = (step.angle / 90) % 2 ? 0 : 1
	let direction = step.angle / 180 >= 1 ? -1 : 1
	let last = [...path.at(-1)]

	last[axis] += Math.round(step.length * direction / 10)
	path.push(last)
})

document.body.innerText += JSON.stringify(path)
console.log(path)