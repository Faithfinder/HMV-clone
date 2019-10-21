export function facebook(req, res) {
    const io = req.app.get("io");

    io.in(req.session.socketId).emit("facebook", req.user);
    res.end();
}
