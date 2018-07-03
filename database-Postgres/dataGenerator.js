const faker = require('faker');
const fs = require('fs');
var stream = fs.createWriteStream('data.csv');
// var stream = fs.createWriteStream('ids.csv');
// var csvData = 'title,location,home_type,short_description,more_description,highlights,owner,property_features\n';


  const generateGeneralInfo = () => {
    var csvData = ''
    var title = `${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()} Home`
    var location = faker.address.city()
    var home_type = `${faker.commerce.productAdjective()} HOUSE`
    var short_description = faker.lorem.sentence();
    var more_description = moreDescriptionGenerator();
    var highlights = highlightsGenerator();
    var owner = [faker.name.firstName(),faker.internet.avatar()];
    var property_features = [faker.random.number(10),faker.random.number(6),faker.random.number(6),faker.random.number(4)]
    csvData += `${title},${location},${home_type},${short_description},"{${more_description}}","{${highlights}}","{${owner}}","{${property_features}}"\n`
   return csvData; 
  }

  const highlightsGenerator = () => {
    var arr = [];
    let possibleHighlights = [
      {
        head: 'Great check-in experience',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Great location',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Self check-in',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Sparkling clean',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Breakfast',
        body: faker.lorem.sentence(),
      },
      {
        head: 'Indoor fireplace',
        body: faker.lorem.sentence(),
      },
    ]
    for (var i = 0; i < 3; i++) {
      let index = parseInt(Math.random() * possibleHighlights.length);
      if(possibleHighlights[index]){
       arr.push(`${possibleHighlights[index].head}`)
       arr.push(`${possibleHighlights[index].body}`)
       possibleHighlights.splice(index, 1);
      }
      
    }
    return arr;
}

const moreDescriptionGenerator = () => {
  let possibleDescriptions = [
    {
      head: 'Guest access',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Interaction with guests',
      body: faker.lorem.sentence(),
    },
    {
      head: 'Other things to note',
      body: faker.lorem.sentence(),
    },
  ];
  let arr = ['The space',`${faker.lorem.paragraph()}`];

  for (var i = 0; i < faker.random.arrayElement([1, 2, 3]); i++) {
    let index = parseInt(Math.random() * possibleDescriptions.length);
    if(possibleDescriptions[index]) {
      arr.push(`${possibleDescriptions[index].head}`);
      arr.push(`${possibleDescriptions[index].body}`);
      possibleDescriptions.splice(index, 1);
    }
  }
return arr
}



// var csvAmenities = 'category_head,category_item_desc,category_item_supl_desc,listing_id\n';

// const generateCategoryItems = (category) => {
//   let arr = [];

//   for (var i = 0; i < faker.random.arrayElement([2, 3]); i++) {
//     let index = parseInt(Math.random() * category.length);
//     arr.push(category[index]);
//     category.splice(index, 1);
//   }

//   return arr;
// }

// const generateItems = () => {
  
//   let possibleAmenities = {
//     'Basic': [
//       {
//         amenity_description: 'Wifi',
//         supplemental_description: 'Continuous access in the listing',
//       },
//       {
//         amenity_description: 'Iron',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Essentials',
//         supplemental_description: 'Towels, bed sheets, soap, and toilet paper',
//       },
//       {
//         amenity_description: 'Hot water',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Indoor fireplace',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'TV',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Washer',
//         supplemental_description: 'In the building, free or for a fee',
//       },
//       {
//         amenity_description: 'Dryer',
//         supplemental_description: 'In the building, free or for a fee',
//       },
//       {
//         amenity_description: 'Heating',
//         supplemental_description: 'Central heating or a heater in the listing',
//       },
//       {
//         amenity_description: 'Essentials',
//         supplemental_description: 'Towels, bed sheets, soap, and toilet paper',
//       },
//     ],
//     'Dining': [
//       {
//         amenity_description: 'Kitchen',
//         supplemental_description: 'Space where guests can cook their own meals',
//       },
//       {
//         amenity_description: 'Cooking basics',
//         supplemental_description: 'Pots and pans, oil, salt and pepper',
//       },
//       {
//         amenity_description: 'Dishes and silverware',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Dishwasher',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Microwave',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Refrigerator',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Oven',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Stove',
//         supplemental_description: '',
//       },
//     ],
//     'Facilities': [
//       {
//         amenity_description: 'Free parking',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Gym',
//         supplemental_description: 'Free, in the building or nearby',
//       },
//       {
//         amenity_description: 'Pool',
//         supplemental_description: 'Private or Shared',
//       },
//     ],
//     'Guest access': [
//       {
//         amenity_description: 'Host greets you',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Private entrance',
//         supplemental_description: 'Separate street or building entrance',
//       },
//       {
//         amenity_description: 'Building staff',
//         supplemental_description: 'Someone is available 24 hours a day to let guests in',
//       },
//     ],
//     'Bed and bath': [
//       {
//         amenity_description: 'Shampoo',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Hair dryer',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Hangers',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Bed linens',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Extra pillows and blankets',
//         supplemental_description: '',
//       },
//     ],
//     'Safety features': [
//       {
//         amenity_description: 'Fire extinguisher',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Smoke detector',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'First aid kit',
//         supplemental_description: '',
//       },
//       {
//         amenity_description: 'Carbon monoxide detector',
//         supplemental_description: '',
//       },
//     ]
//   };

//   let categories = Object.keys(possibleAmenities);

//   let arr = [];

//   for (var i = 0; i < faker.random.arrayElement([3,4,5]); i++) {
//     const category = faker.random.arrayElement(categories);
//     arr.push({
//       category_head: category,
//       category_items: generateCategoryItems(possibleAmenities[category])
//     });
//     delete possibleAmenities[category];
//     categories.splice(categories.findIndex(((e) => e === category)), 1);
//   }

//   return arr;
// }

// const generateAmenitiesInfo = (id) => {
//   var items = generateItems();
//   var listing_id = id;
//   var category_head = [];
//   var category_items_desc = [];
//   var category_items_supl = [];
//   items.forEach(function(item){
//     category_head.push(item.category_head)
    
//     item.category_items.forEach(function(item){
//       if(item) {
//         category_items_desc.push(item.amenity_description)
//         category_items_supl.push(item.supplemental_description)
//       }
     
//     })
    
//   })
  
//   csvAmenities += `[${category_head}],[${category_items_desc}],[${category_items_supl}],${listing_id}`
  
// }

function writeData() {
  for(var streams = 1; streams <= 5000; streams++) {
    console.time('batch')
    var data = ''
      for (var i = 1; i <= 2000;i++) {
        data += generateGeneralInfo();
      }
    stream.write(data);
    stream.on('drain',function(){
      console.log('drain')
    })
    console.timeEnd('batch')
    console.log(`batch ${streams} written to file`)
  }
}

writeData();


// function writeData() {
//     console.time('batch')
//     var data = ''
//     var id = 1204040
//     for(var i = 0; i <= 1000; i++){
//       id+=8050
//       data += `${id.toString()}\n`;
//     }
//     stream.write(data);
//     stream.on('drain',function(){
//       console.log('drain')
//     console.timeEnd('batch')
//     console.log(`batch ${streams} written to file`)
//   })
// }

// writeData();
// fs.writeFileSync('dataAmenities.csv', csvAmenities);
