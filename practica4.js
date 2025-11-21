use("BaseDatos");

db.Mesa.updateOne(
    {_id: ObjectId("691e13fc2b64f0a8ec7d6960")},
    {$set:{Material:"Resina"}}
),
db.Mesa.updateOne(
    {_id: ObjectId("691e13fc2b64f0a8ec7d6961")},
    {$set:{Material:"Vidrio"}}
),

db.Mueble.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d6974")},
    {$set:{Color:"Transparente"}}
),
db.Mueble.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d6975")},
    {$set:{Color:"Blanco"}}
),

db.Silla.updateOne(
    {_id: ObjectId("691e13fc2b64f0a8ec7d696a")},
    {$set:{Tamaño:"Alta"}}
),
db.Silla.updateOne(
    {_id: ObjectId("691e13fc2b64f0a8ec7d696b")},
    {$set:{Tamaño:"Grande"}}
),

db.Mueble.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d697e")},
    {$set:{Comodidad:"Alta"}}
),
db.Mueble.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d697f")},
    {$set:{Comodidad:"Baja"}}
),

db.Television.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d6988")},
    {$set:{Resolucion:"4K"}}
),
db.Television.updateOne(
    {_id: ObjectId("691e13fd2b64f0a8ec7d6989")},
    {$set:{Resolucion:"1080p"}}
)