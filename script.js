
// 1. Create your own Resume data in JSON format

var resume = {
    "name": "R Aravind Kumar",
    
    "contact": {
      "address": "no.24, Bajanai madam street, Arumbavur(po), perambalur(dt)",
      "pincode": 621103,
      "phone": 8056931384,
      "email": "kingrak1210@gmail.com"
    },
    "education": [
      {
        "degree": "B.com",
        "university": "Madras University",
        "graduation_year": 2022
      },
      {
        "degree": "M.B.A",
        "university": "Bharathidasan University",
        "graduation_year": "Present"
      }
    ],
    
    
    "experience": 
      {
        "title": "Junior Executive",
        "company": "Aswins Home Special (Perambalur)",
        "start_date": "18/07/2022",
        "end_date": "10/06/2023"
      },

  }


  // for the above  JSON, iterate over all for loops

  // for loop method

  for (var  section in resume) {
    console.log(section + ":");
    if (Array.isArray(resume[section])) {
      resume[section].forEach(item => {
        for (const key in item) {
          console.log(key + ": " + item[key]);
        }
        console.log();
      });
    } else if (typeof resume[section] == "object") {
      for (var key in resume[section]) {
        console.log(key + ": " + resume[section][key]);
      }
    } else {
      console.log(resume[section]);
    }
    console.log();
  }


 // For in loop method


for (var section in resume) {
  console.log(section + ":");
  if (Array.isArray(resume[section])) {
    for (var i = 0; i < resume[section].length; i++) {
      for (var key in resume[section][i]) {
        console.log(key + ": " + resume[section][i][key]);
      }
      console.log("\n");
    }
  } else if (typeof resume[section] == "object") {
    for (var key in resume[section]) {
      console.log(key + ": " + resume[section][key]);
    }
    console.log("\n");
  } else {
    console.log(resume[section]);
  }
}
