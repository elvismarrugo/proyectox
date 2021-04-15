"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = exports.deleteVideo = exports.getVideo = exports.getVideos = exports.createVideo = void 0;
const Video_1 = __importDefault(require("./Video"));
const createVideo = (req, res) => {
    const video = new Video_1.default(req.body);
    console.log(video);
    res.json('Tasa de video guardada');
};
exports.createVideo = createVideo;
const getVideos = (req, res) => {
    res.json('obteniendo videos');
};
exports.getVideos = getVideos;
const getVideo = (req, res) => {
    res.json('obteniendo un video');
};
exports.getVideo = getVideo;
const deleteVideo = (req, res) => {
    res.json('eliminar un inter');
};
exports.deleteVideo = deleteVideo;
const updateVideo = (req, res) => {
    res.json('actualizar un video');
};
exports.updateVideo = updateVideo;
