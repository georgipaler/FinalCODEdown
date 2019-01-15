'use strict'
const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')

//creare baza de date
const sequelize = new Sequelize('final', 'root', '', {
  dialect: 'mysql'
 
});

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nume: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
     username: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
    password: {
         type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
    profil: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: true
    },
    materie:{
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: true
    },
    grupa: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    an: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    specializare: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: true
    }
    
});

const Test = sequelize.define('test', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeTest: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
    timp: {
          type: Sequelize.INTEGER,
          allowNull: false
    },
    materie: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
    codTest: {
        type: Sequelize.STRING(100),
        validate : {
			len : [3, 100]
        },
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    }
});

Test.belongsTo(User, {foreignKey: 'userId'});

const Intrebare = sequelize.define('intrebare', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    enunt: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    tipIntrebare: {
        type: Sequelize.STRING(100),
        validate : {
			len : [2, 100]
        },
        allowNull: false
    },
    idTest: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Test,
            key: 'id',
        }
    }
});

Intrebare.belongsTo(Test, {foreignKey: 'idTest'});

const Raspuns = sequelize.define('raspuns', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    enunt: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    idIntrebare: {
        type: Sequelize.INTEGER,
        references: {
            model: Intrebare,
            key: 'id',
        },
        allowNull: false
    },
     isCorect: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

Raspuns.belongsTo(Intrebare, {foreignKey: 'idIntrebare'});

const Raport = sequelize.define('raport', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTest: {
        type: Sequelize.INTEGER,
        references: {
            model: Test,
            key: 'id',
        },
        allowNull: false
    },
     dataRaport: {
        type: Sequelize.STRING(),
        allowNull: false
    },
    punctaj:{
       type: Sequelize.INTEGER,
       allowNull: false,
    },
    idUser: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false
    },
});

Raport.belongsTo(User, {foreignKey: 'idUser'});
Raport.belongsTo(Test, {foreignKey: 'idTest'});

const app = express()
app.use(bodyParser.json())


// app.get('/server/create', async(req, res) => {
//     //create DB
//     console.log('entered api/create')
// 	try{
// 		await sequelize.sync({force : true})
// 		res.status(201).json({message : 'created'})
// 		console.log('created')
// 	}
// 	catch(e){
// 		console.warn(e)
// 		res.status(500).json({message : 'server error'})
// 		console.log('error')
// 	}
// })


app.get('/get/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/post/users', async (req, res) => {
    //post user
	try{
		if (req.query.bulk && req.query.bulk == 'on'){
			await User.bulkCreate(req.body)
			res.status(201).json({message : 'user created'})
		}
		else{
			await User.create(req.body)
			res.status(201).json({message : 'user created'})
		}
	}
	catch(e){
		console.warn(e)
		res.status(500).json({message : 'eroare server '})
	}
});


app.get('/get/teste', (req, res) => {
    //preluare teste
    Test.findAll().then(teste => res.json(teste))
})

app.get('/get/intrebari', (req, res) => {
    //preluare intrebari
    Intrebare.findAll().then(intrebari => res.json(intrebari))
})

app.get('/get/raspunsuri', (req, res) => {
    //preluare raspunsuri
    Raspuns.findAll().then(raspunsuri => res.json(raspunsuri))
})

app.get('/get/rapoarte', (req, res) => {
    //preluare rapoarte
    Raport.findAll().then(rapoarte => res.json(rapoarte))
})

