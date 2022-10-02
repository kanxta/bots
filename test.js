const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

let hos=0;
let ent=0;
let entme=[];

//役職
let yak=[]
let yakm=[];
let run;

client.on("ready", () => {
  console.log(`==== Logged in: ${client.user.tag} ====`);
  });

client.on("messageCreate", (message) => {
  console.log(`▶ [${message.author.tag}] ${message.content}`);
  if (message.mentions.users.has(client.user.id)) 
  {
    if(`${message.content}`==`<@1019561306635898952>`)
    {
      if(hos==0)
      {
        ent++;
        hos=1;
        entme[0]=`${message.author.tag}`;
        message.reply("ゲームをホスト・エントリーしました。");
        return;
      }
      
      if(hos==1)
      {
        if(entme.indexOf(`${message.author.tag}`)==-1){
          ent++;
          entme.push(`${message.author.tag}`);
          message.reply("エントリーしました。あなたは"+ ent + "人目です。");
          return;
        }
      }
    }
    if(`${message.content}`==`<@1019561306635898952> reset`)
    {
      hos=0;
      ent=0;
      entme=[];
      message.reply(`resetが完了しました。`)
    }
    //start処理
    if(`${message.content}`==`<@1019561306635898952> start`){
      //人数確認
      if(ent<4){
        message.reply(`スタートできません（エラー:人数がすくなすぎます）現在の人数:`+ ent +`人`)
      }
      if(ent>10){
        message.reply(`スタートできません（エラー:人数が多すぎます。開発を進めるためにDMで鯖主をせかしましょう。 #鯖主に連絡でもせかしましょう。）現在の人数:`+ ent +`人`)
      }
      
      //ここからスタート処理
      else if(ent>4 && ent<11){
        message.reply(`ゲームをスタートします。ヒント:役職が少ない？鯖主をDMや#鯖主に連絡でせかしましょう！`);
        
        //人数に応じて役職を指定
        //0:村人
        //1:人狼
        //2:狂人
        //3:占い
        if(ent==5)
        {
          yak=[1,3,0,0,0];
          run = Math.floor( Math.random() * 5 );
          console.log(run)
        }
        if(ent==6){
          yak=[1,3,0,0,0,0];
          run = Math.floor( Math.random() * 6 );
          console.log(run)
        }
        if(ent==7){
          yak=[1,3,1,0,0,0,0];
          run = Math.floor( Math.random() * 7 );
          console.log(run)
        }
        if(ent==8){
          yak=[1,3,1,3,0,0,0,0];
          run = Math.floor( Math.random() * 8 );
          console.log(run)
        
        }
        if(ent==9){
          yak=[1,3,1,3,2,0,0,0,0];
          run = Math.floor( Math.random() * 9 );
          console.log(run)
        
        }
        if(ent==10){
          yak=[1,3,1,3,2,0,0,0,0,0];
          run = Math.floor( Math.random() * 10 );
          console.log(run)
        
        }
      }
      
      //スタート処理終わり
      //エラー
      else{message.reply(`内部エラーです。bot管理者（鯖主kanxta）にDMしてください。すぐ（？）改善します。`);
          console.log('ERROR-鯖主DM')}
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
