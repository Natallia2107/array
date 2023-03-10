const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
]

const people = [
	'Beck, Glenn',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Bethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsne, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Broden, Joshep',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Bllings, Josh',
	'Biondo, Frank',
	'Birrell, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William',
]

// Array.prototype.filter()
// 1. filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

console.table(inventorsBornIn1500)

// Array.prototype.map()
// 2. give us an array of the inventory first and last name
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.table(fullNames)

// Array.prototype.sort()
// 3. sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(function (a, b) {
	if (a.year > b.year) {
		return 1
	} else {
		return -1
	}
})

console.table(ordered)

// Array.prototype.reduce()
// 4. how many years did all the inventors live
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0)

console.table(totalYears)

// 5. sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
	const lastGuy = a.passed - a.year
	const nextGuy = b.passed - b.year
	return lastGuy > nextGuy ? -1 : 1
})

console.table(oldest)

// 6. create a list of Boulevards in Paris that cointain 'de' anywhere in the name 
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'))
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'))

// 7. sort Exercise - sort the people alphabetically by lat name 
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = lastOne.split(', ')
    return aLast > bLast ? 1 : -1
})

// reduce exercise - sum up the instances od each od these 
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0
    } 
    obj[item]++
    return obj
}, {})
console.log(transportation);