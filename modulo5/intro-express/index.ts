// import express from 'express'
// import cors from 'cors'
// import { users } from './data'

// const app = express()
// app.use(express.json())
// app.use(cors())

// app.get('/playlists', (req, res) => {
//   const playlists = users.map((playlist) => {
//     return playlist.playlists
//   }).flat(1)
//   res.send(playlists)
// })

// app.get('/playlists/:playlistId/tracks', (req, res) => {
//   const playlistId = req.params.playlistId

//   const playlists = users.map((lista) => {
//     return lista.playlists.map((playlistTrack) => {
//       if (playlistTrack.id === playlistId) {
//         res.send(playlistTrack)
//       }
//     })
//   }).flat(1)

//   res.send(playlists)
// })

// app.delete('/playlist/:userId', (req, res) => {
//   const userId = req.params.userId

//   const playlists = users.map((user) => {
//     if (user.id === userId) {
//       return {
//         ...user,
//         playlists: []
//       }
//     }
//     return user
//   })

//   res.send(playlists)
// })

// app.delete('/track/:playlistId', (req, res) => {
//   const playlistId = req.params.playlistId

//   const playlists = users.map((playlist) => {
//     return playlist.playlists.map((track) => {
//       if (track.id === playlistId) {
//         return {
//           ...track,
//           tracks: []
//         }
//       }
//       return track
//     })
//   })

//   res.send(playlists)
// })

// app.listen(3003, () => console.log("Servidor rodando na porta 3003"))