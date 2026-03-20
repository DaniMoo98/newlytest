export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/jav_config.ws') {
      const configText = `title=RuneScape
codebase=http://world1.aethryadnd.online/
initial_class=client.class
initial_jar=gamepack.jar
lobbyaddress=lobby.aethryadnd.online
serverlist=http://config.aethryadnd.online/serverlist.ws
window_preferredwidth=1024
window_preferredheight=768
adverturl=http://www.runescape.com/g=runescape/bare_advert.ws`;

      return new Response(configText, {
        headers: { 
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        },
      });
    }

    return new Response("Game Config Server Online. Request /jav_config.ws", { status: 200 });
  },
};
