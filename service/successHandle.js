function successHandle(res, newPost, message) {
    const responseObject = {
        "status": "success",
    };
    if (message) {
        responseObject.message = message
    } else {
        responseObject.data = newPost
    };
    // 回傳成功預設狀態200，這邊還是寫出來
    res.status(200).send(responseObject);
};

module.exports = successHandle;