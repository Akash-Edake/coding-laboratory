const arraylist = ["ubuntu linux",
{nest1:{
  nest2:{
    nest3:{
      nest4:{
        nest5:{

        }
      }
    }
  },
}}, "kali linux", "majaro linux", "mint linux", "arch linux"]

nestedToString =JSON.parse (JSON.stringify(arraylist))
objectTostringToobject = JSON.stringify(arraylist)
console.log(nestedToString)
console.log(objectTostringToobject)
console.log(arraylist)

