require('../models/database');
const Category = require('../models/Category');


/*
 * Get /
 * Homepage
*/

exports.homepage = async(req, res) => {

    res.render('index', { title: 'Family-Recipe'});


}


async function insertTestData(){

    try {
        await Category.insertMany(
            {
                "name": "sushi",
                "image": "spicycrab.jpg"
            }
        );
    } catch (error) {
        console.log('err', + error);
    }
}

insertTestData();