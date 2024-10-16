const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `* 𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 𝐏𝐥𝐞𝐛𝐞𝐬🤍: * ${pesan}`;
  let teks = `*✨𝐁𝐞𝐜𝐚𝐮𝐬𝐞 𝐓𝐨𝐦𝐨𝐫𝐫𝐨𝐰 ☀𝐖𝐢𝐥𝐥 𝐁𝐞 𝐍𝐢𝐜𝐞🩵*\n\n ${oi}\n\n➥ _*Lista de integrantes✨:*_\n`;
  for (const mem of participants) {
    teks += `🩵 ⇝ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ *JᴏssɪBᴏᴛ ⇝ @BʏJᴏssɪ*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;