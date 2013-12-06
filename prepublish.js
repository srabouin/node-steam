[
  'dota/steammessages.proto',
  'steamclient/encrypted_app_ticket.proto',
  'steamclient/steammessages_base.proto',
  'steamclient/steammessages_clientserver.proto'
].forEach(function(path) {
  require('https').get('https://raw.github.com/SteamRE/SteamKit/master/Resources/Protobufs/' + path, function(response) {
    response.pipe(require('fs').createWriteStream('lib/protobufs/' + path));
  });
});
