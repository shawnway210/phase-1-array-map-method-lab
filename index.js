const tutorials = [
  {
   name:'what does the this keyword mean?'},
  {name:'What is the Constructor OO pattern?'},
  {name:'implementing Blockchain Web API'},
  {name:'The Test Driven Development Workflow'},
  {name:'What is NaN and how Can we Check for it'},
  {name:'What is the difference between stopPropagation and preventDefault?'},
  {name:'Immutable State and Pure Functions'},
  {name:'what is the difference between == and ===?'},
  {name:'what is the difference between event capturing and bubbling?'},
  {name:'what is JSONP?'}
];

function titleCased(){
  return tutorials.map(tutorial => {
    const words =tutorial.name.split(' ')
    const titleCaseWords=words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase()
      const restOfWord = word.slice(1)
      return firstLetter + restOfWord 
       })
       const titleCasedName =titleCaseWords.join(' ')
       return titleCasedName
    })
}
  console.log(titleCased())

  

