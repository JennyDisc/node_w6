const mongoose = require("mongoose");
const moment = require('moment-timezone');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '貼文姓名未填寫']
        },
        sex: {
            type: String,
            enum: ["male", "female"]
        },
        email: {
            type: String,
            required: [true, 'email 未填寫'],
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, '請輸入密碼'],
            minlength: 8,
            select: false
        },
        photo: {
            type: String,
            default: ""
        },
        followList: {
            type: String
        },
        likeArticle: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            // default: Date.now,
            default: () => moment().tz("Asia/Taipei").toDate(),
            get: v => moment(v).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    {
        versionKey: false,
    }
);

userSchema.set('toJSON', { getters: true });

// 建立 model
const User = mongoose.model('user', userSchema);

module.exports = User;
