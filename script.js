const fs = require('fs');

// Read second argument from command line
const inputFile = process.argv[2];

// Function to validate and process the input
const processInput = async () => {
    try {
        const data = await fs.promises.readFile(inputFile, 'utf-8');
        
        // Process data using split and discard any character other than upper and lower case letters and numbers
        const processedData = data.split(',').map(item => item.trim())
        .filter(item => /^[a-zA-Z0-9]+$/.test(item));

        // Step1
        const result1 = step1(processedData);
        console.log(result1);

        // Step2
        const result2 = step2(processedData);
        console.log(result2);

        //Step3
        const result3 = step3(result1, result2);
        console.log(result3);

    } catch (error) {
        console.error('An error occurred while processing input data:', error.message);
    }
};

// Step 1 fucntion
const step1 = items => {
    const itemCount = {};

    // Count occurrences of each unique object
    items.forEach(item => {
        itemCount[item] = (itemCount[item] || 0) + 1;
    });

    // Sort the output by count then by text
    const sortedKeys = Object.keys(itemCount).sort((a, b) => {
        if (isNaN(a) && !isNaN(b)) return 1;
        else if (!isNaN(a) && isNaN(b)) return -1;
        else return a.localeCompare(b);
    });

    // Create key-value pairs for sorted result
    const sortedOutput = {};
    for (const key of sortedKeys) sortedOutput[key] = itemCount[key];

    return sortedOutput;
};


// Step 2 function
const step2 = items => {
    const locationMap = {};
  
    // Create a map of items to their locations in the input
    items.forEach((item, index) => {
      if (!locationMap[item]) locationMap[item] = [];
      locationMap[item].push(index);
    });
  
    return locationMap;
};


// Function to perform step 3
const step3 = (output1, output2) => {
    const combinedOutput = {};
  
    Object.keys(output1).forEach(key => {
      combinedOutput[key] = {
        count: output1[key],
        indices: output2[key]
      };
    });
  
    return combinedOutput;
};
  

// Call function to process the input file
processInput();


module.exports = { step1, step2, step3 }