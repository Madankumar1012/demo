{
    "_id" : ObjectId("64ed962376704d5207c371c3"),
    "walletId" : 641288,
    "blockchain" : "Tron",
    "network" : "testnet",
    "cryptoId" : ObjectId("64c0be933981d62af24dbb80"),
    "address" : {
        "seedIndex" : 641288,
        "key" : "414c2f9304aa94c33b1a2fdb1506fec7f76e4e9e00"
    },
    "status" : {
        "code" : "Full",
        "history" : [ 
            {
                "_id" : ObjectId("64ee0d075513a4f44fe050aa"),
                "code" : "Available"
            }, 
            {
                "_id" : ObjectId("64ee1152dac9369e3fd50fcc"),
                "code" : "In Use",
                "message" : "0x3ad72390d9cc381df63bfabe7d241ff1c80e8c0e2287e88296c670dbdd4cadb8",
                "updated" : ISODate("2023-08-29T15:21:43.689Z")
            }
        ],
        "message" : "Available",
        "updated" : ISODate("2023-08-29T15:40:02.611Z")
    },
    "creationDate" : ISODate("2023-08-29T06:54:27.464Z"),
    "paymentProvider" : ObjectId("634fbc5a603d2b1171c89892"),
    "balance" : [ 
        {
            "_id" : ObjectId("64ee1151dac9369e3fd50f74"),
            "cryptoId" : "TRX",
            "balanceAmount" : 100000000,
            "balanceAmountUSDApprox" : 7740000,
            "updated" : ISODate("2023-08-29T15:40:01.900Z"),
            "cryptoName" : "Tron"
        }
    ],
    "balanceAmountUSDApprox" : 7740000,
    "balanceHistory" : [ 
        {
            "_id" : ObjectId("64ee1151dac9369e3fd50f73"),
            "amount" : 100000000,
            "updated" : ISODate("2023-08-29T15:40:01.742Z")
        }
    ]
}
