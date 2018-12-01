const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
var items = Array("Survival is a tenuous proposition in this sprawling tomb.	"," More blood soaks the soil, feeding the evil therein.	"," Another life wasted in the pursuit of glory and gold.	"," This is no place for the weak, or the foolhardy.	"," More dust, more ashes, more disappointment.	"," Perched at the very precipice of oblivion...	"," A hands-breadth from becoming unwound...	"," Teetering on the brink, facing the abyss	"," And now the true test...hold fast, or expire?	"," As life ebbs, terrible vistas of emptiness reveal themselves.	"," Mortality clarified in a single strike.	"," Death waits for slightest lapse in concentration...	"," How quickly the tide turns	"," Dazed, reeling, about to break...	"," Such a terrible assault cannot be left unanswered...	"," Grievous injury, palpable fear	"," Ringing ears, blurred vision - the end approaches...	"," A dizzying blow to body and brain	"," Unnerved, unbalanced - exposed to a killing blow...	"," A setback, but not the end of things.	"," Wounds to be tended, lessons to be learned.	"," Regroup. Reassemble. Evil is timeless, after all.	"," Failure tests the mettle of heart, brain, and body.	"," You will endure this loss, and learn from it.	"," We fall so that we may learn to pick ourselves up once again.	"," Do not ruminate on this fleeting failure - the campaign is long, and victory will come.	"," Where there is no peril in the task, there can be no glory in its accomplishment.	"," Ignorance of your enemy and of yourself will invariably lead to defeat.	"," Great adversity has a beauty - it is the fire that tempers the blade.	"," You cannot learn a thing you think you know...	"," Injury and despondence set the stage for heroism... or cowardice.	"," Without tools of iron, you must rely on flesh and indefatiguable purpose.	"," Another mariner, another misfortune.	"," Even the cold stone seems bent on preventing passage.	"," Such blockages are unsurprising - these tunnels predate even the earliest settlers.	"," Nature herself, a victim to the spreading corruption, malformed with misintent.	"," True desperation is known only when escape is impossible.	"," Cornered. Trapped. And forced to fight on...	"," No chance for egress - will this be a massacre?	"," Gnawing hunger sets in, turning the body against itself, weakening the mind.	"," To fall for such a little thing...a bite of bread...	"," Packs full of steel and war, but nary a thought given to the plow	"," No force of will can overcome a failing body.	"," The requirements of survival cannot be met on an empty stomach.	"," The darkness holds much worse than mere trickery and boogey-men.	"," Darkness closes in, haunting the hearts of men.	"," Terrors may indeed stalk these shadows, but yonder, a glint of gold	"," Secrets and wonders can be found in the most tenebrous corners of this place.	"," ...And now the darkness holds dominion - black as death.	"," Cruel machinations spring to life with a singular purpose	"," Curious is the trap-maker's art...his efficacy unwitnessed by his own eyes.	"," Mechanical hazards, possessed by evil intent	"," Ambushed by foul invention	"," Ancient traps lie in wait, unsprung and thirsting for blood.	"," Carelessness will find no clemency in this place	"," Mind that such missteps are the exception, and not the rule.	"," Watch your step...	"," As the ghoulish collection scatters, the rats prepare to feast.	"," A predator is often blind to its own peril. "," The twisted faces of the damned, piled high and cloaked in malice	"," Compassion is a rarity in the fevered pitch of battle.	"," A momentary abatement...	"," The wounds of war can be healed, but never hidden.	"," Soothed, sedated.	"," Surgical precision	"," Vigor is restored	"," The blood pumps. The limbs obey.	"," The flesh is knit	"," Patched up, if only to bleed again.	"," Death cannot be escaped, but it can be postponed...	"," A death denied - for now...	"," Death is patient. It will wait.	"," The blood quickens	"," A brilliant confluence of skill and purpose	"," A time to perform beyond one's limits	"," Inspiration and improvement	"," Weakened	"," Diminished	"," The will to fight falters	"," Confusion, nerves, and panic	"," Gnawing uncertainty - the birthplace of dread.	"," Festering fear consumes the mind	"," The horror...	"," The abyss returns even the boldest gaze	"," Impressive haul, if you value such things.	"," Ornaments. Neatly ordered, lovingly admired.	"," Such a burden of finery risks life and limb...	"," A full pack often attracts ...unwanted attention.	"," The space between worlds is no place for mortal men.	"," It could be dismissed as a fever dream, if not for the corpses.	"," Behold the infinite malignity of the stars	"," A star-spawned horror	"," Ruin has come to our family...	"," You remember our venerable house, opulent and imperial.	"," A moment of respite, a chance to steel oneself against the coming horrors.	"," A spark without kindling is a goal without hope.	"," Circle in the dark. The battle may yet be won.	"," Gathered close, in tenuous firelight and uneasy companionship...	"," Huddled together, furtive and vulnerable. Rats in a maze.	"," This day belongs to the Light	"," Beacons in the darkness, stars in the emptiness of the void.	"," More bones returned to rest. Devils remanded to their abyss.	"," Room by room, hall by hall, we reclaim what is ours.	"," Well struck	"," A powerful blow	"," A devastating blow	"," A singular strike...	"," A decisive pummeling	"," Masterfully executed	"," Precision and power	"," Impressive	"," The ground quakes	"," The bigger the beast, the greater the glory.	"," A victory - perhaps a turning point.	"," Prodigious size alone does not dissuade the sharpened blade.	"," Their cursed champions falls.	"," Monstrous size has no intrinsic merit, unless inordinate exsanguination be considered a virtue...	"," Great is the weapon that cuts on its own.	"," The slow death - unforeseen, unforgiving.	"," A death by inches...	"," Slowly, gently, this is how a life is taken.	"," Decimated	"," Obliterated	"," Destroyed	"," Eradicated	"," Annihilated	"," Executed with impunity	"," Another abomination cleansed from our lands.	"," Begone, fiend	"," Back to the pit	"," Another one falls.	"," As the fiend falls, a faint hope blossoms.	"," Confidence surges as the enemy crumbles	"," Press this advantage, give them no quarter.	"," Their formation is broken - maintain the offensive.	"," Continue the onslaught. Destroy. Them. All.	"," Glittering gold, trinkets and baubles, paid for in blood.	"," If only treasure could staunch the flow of other worldy corruption.	"," Finding the stuff is only the first test, now it must be carried home.	"," Packs laden with loot are often low on supplies.	"," Wealth beyond measure, awarded to the brave and foolhardy alike.	"," A fortune waiting to be spent...	"," A handsome reward for a task well performed.	"," This skirmish may be lost, but the battle may yet be won.	"," A wise general cuts losses and regroups.	"," The sin is not in being outmatched, but in failing to recognize it.	"," The light, the promise of safety	"," The way is lit. The path is clear. We require only the strength to follow it.	"," In radiance may we find victory.	"," As the light gains purchase, spirits are lifted and purpose is made clear.	"," The match is struck, a blazing star is born	"," These nightmarish creatures can be felled, they can be beaten	"," Remind yourself that overconfidence is a slow and insidious killer.	"," A trifling victory, but a victory nonetheless.	"," This expedition, at least, promises success.	"," As victories mount, so too will resistance.	"," Be wary - triumphant pride precipitates a dizzying fall...	"," Ghoulish horrors - brought low and driven into the mud.	"," Seize this momentum - push on to the task's end	"," Success, so clearly in view. Or, is it merely a trick of the light?	"," Driving out corruption is an endless battle, but one that must be fought.	"," The agents of pestilence will yet be driven from our woods.	"," Every cleared path and charted route reduces the isolation of our troubled estate.	"," Injury and despondence set the stage for heroism... or cowardice.	"," Without tools of iron, you must rely on flesh and indefatiguable purpose.	"," A devil walks these halls...only the mad or the desperate go in search of him.	"," A moment of valor shines brightest against a backdrop of despair.	"," These nightmarish creatures can be felled, they can be beaten	"," Another soul battered and broken. Cast aside like a spent torch.	"," Those without the stomach for this place must move on.	"," Send this one to journey elsewhere, for we have need of sterner stock.	"," Suffer not the lame horse, nor the broken man.	"," This one has become vestigial. Useless.	"," The task ahead is terrible, and weakness cannot be tolerated.	"," It is done. Turn yourself now to the condition of those poor devils who remain.	"," Slumped shoulders, wild eyes, and a stumbling gait - this one is no more good.	"," Fan the flames. Mold the metal. We are raising an army.	"," A man in a robe, claiming communion with the divine. Madness.	"," More arrive, foolishly seeking fortune and glory in this domain of the damned.	"," The human mind - fragile like a robin's egg.	"," Wherefore, heroism?	"," The mind cannot hope to withstand such an assult.	"," Even the aged oak will fall to the tempest's winds.	"," Madness, our old friend	"," One can sometimes find clarity in madness, but only rarely...	"," Madness - sublimity of the intelligence, or so it has been said.	"," The bulwarks of the mind have fallen	"," The abyss is made manifest	"," Frustration and fury, more destructive than a hundred cannons.	"," There can be no hope in this hell, no hope at all.	"," Fear and frailty finally claim their due.	"," Reeling, gasping, taken over the edge into madness	"," Those who covet injury find it in no short supply.	"," The walls close in, the shadows whisper of conspiracy	"," Self-preservation is paramount - at any cost	"," A moment of valor shines brightest against a backdrop of despair.	"," A moment of clarity in the eye of the storm..	"," Anger is power - unleash it	"," Many fall in the face of chaos. But not this one, not today.	"," Adversity can foster hope, and resilience.");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`What is my purpose?`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '/';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
  if (cmd === `${prefix}ding`){
    message.channel.send("Dong!");
  }
  if (cmd === `${prefix}pika`){
    message.channel.send(new Discord.Attachment('./photos/pika.png')).catch(console.error);
  }
  if (cmd === `${prefix}bork`){
    message.channel.send(new Discord.Attachment('./photos/bork.jpg')).catch(console.error);
  }
  if (cmd === `${prefix}people`){
    message.channel.send(new Discord.Attachment('./photos/people.png')).catch(console.error);
  }
  if (cmd === `${prefix}resolve2`){
    message.channel.send("'"+items[Math.floor(Math.random()*items.length)]+"'");
  }
});

bot.login(process.env.token);
