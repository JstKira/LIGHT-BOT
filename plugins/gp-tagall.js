let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ المجموعة: *${groupMetadata.subject}*\n▢ الأعضاء: *${participants.length}*${text ? `\n▢ الرسالة: ${text}\n` : ''}\n┌───⊷ *المنشن*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ 𝐊𝐢𝐫𝐚 ┃ 𝐁𝐨𝐭 ✪──', null, {
      mentions: users
    })
  }
  
  handler.help = ['tagall']
  handler.tags = ['group']
  handler.command = ['tagall','منشن']
  handler.admin = true
  handler.group = true
  
  export default handler
  
