'use strict';

const download = require('./src/download');
const torrentParser = require('./src/torrent-parser');
const tracker = require('./src/tracker.js');
const torrent = torrentParser.open(process.argv[2]);

console.log(torrentParser.getannouncelist(torrent));
// tracker.getPeers(torrent,peers => {
//     peers.forEach(peer => {
//         console.log(`peer: ${peer.ip}, ${peer.port}`)
//         // console.log(peer);
//     });
//     console.log(`\n${peers.length} : peers found`)

// })


download(torrent, torrent.info.name);