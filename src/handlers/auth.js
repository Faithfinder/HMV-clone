export function facebook(req, res) {
    emit(req, res, { user: req.user });
}

export function facebookFailure(req, res) {
    emit(req, res, {
        message: "Failed to authenticate through Facebook. Please try again."
    });
}

const emit = (req, res, obj) => {
    const io = req.app.get("io");
    io.in(req.session.socketId).emit("facebook", obj);
    res.end();
};
