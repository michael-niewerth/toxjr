const fetch=require('node-fetch');
const { MessageEmbed } = require('discord.js');
exports.run= async (client,msg,param)=>{
    fetch("http://shibe.online/api/shibes")
        .then((results)=>results.json())
        .then((data)=>{
            if(!param){
                msg.channel.send({
                        embeds:[{
                            title:"Shiba Inu Picture",
                            image:{url:data[0]}
                        }]
                    }

                )
            }
        })
}
exports.metadata= ['','Der Bot schickt ein Shiba Inu']