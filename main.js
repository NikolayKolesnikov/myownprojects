conMod = [0.46, 0.47, 0.48, 0.50, 0.51, 0.53, 0.54, 0.56, 0.58, 0.59, 0.61, 0.63, 0.65, 0.67, 0.69, 0.71, 0.73, 0.75, 0.77, 0.80, 0.82, 0.85, 0.87, 0.90, 0.93, 0.95, 0.98, 1.01, 1.04, 1.07, 1.10, 1.14, 1.17, 1.21, 1.24, 1.28, 1.32, 1.36, 1.40, 1.44, 1.48, 1.53, 1.58, 1.62, 1.67, 1.72, 1.77, 1.83, 1.88, 1.94, 2.00, 2.06, 2.12, 2.18, 2.25, 2.31, 2.38, 2.45, 2.53];
menMod = [1.28, 1.30, 1.31, 1.32, 1.34, 1.35, 1.36, 1.38, 1.39, 1.40, 1.42, 1.43, 1.45, 1.46, 1.48, 1.49, 1.50, 1.52, 1.53, 1.55, 1.57, 1.58, 1.60, 1.61, 1.63, 1.65];
strMod = [0.30, 0.31, 0.32, 0.34, 0.35, 0.36, 0.37, 0.39, 0.40, 0.42, 0.43, 0.45, 0.46, 0.48, 0.50, 0.51, 0.53, 0.55, 0.57, 0.59, 0.61, 0.63, 0.66, 0.68, 0.71, 0.73, 0.76, 0.78, 0.81, 0.84, 0.87, 0.90, 0.94, 0.97, 1.01, 1.04, 1.08, 1.12, 1.16, 1.20, 1.24, 1.29, 1.33, 1.38, 1.43, 1.48, 1.54, 1.59, 1.65, 1.71];
intMod = [0.61, 0.62, 0.63, 0.64, 0.65, 0.67, 0.68, 0.69, 0.71, 0.72, 0.74, 0.75, 0.77, 0.78, 0.80, 0.81, 0.83, 0.85, 0.86, 0.88, 0.90, 0.92, 0.94, 0.95, 0.97, 0.99, 1.01, 1.03, 1.05, 1.07, 1.10, 1.12, 1.14, 1.16, 1.19, 1.21, 1.23, 1.26, 1.28, 1.31, 1.34, 1.36, 1.39, 1.42, 1.45, 1.47, 1.50, 1.53]
dexMod = [1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.24]
witMod = [0.40, 0.42, 0.44, 0.46, 0.48, 0.51, 0.53, 0.56, 0.58, 0.61, 0.64, 0.68, 0.72, 0.75, 0.78, 0.82, 0.86, 0.91, 0.95, 1.00, 1.05, 1.10, 1.16, 1.22, 1.28, 1.34, 1.41, 1.48, 1.55, 1.63, 1.71]

var base = [
    {
        name: 'Human Fighter',
        mystic: 0,
        race: 0,
        str: 40,
        con: 43,
        dex: 30,
        int: 21,
        wit: 11,
        men: 25,
        patk: 4,
        pdef: 80,
        matk: 6,
        mdef: 41,
        pspd: 300,
        mspd: 333,
        acc: 33,
        critical: 44,
        evasion: 33,
        movespd: 115,
        load: 81900,
        x: -71338,
        y: 258271,
        z: -3104,
        craft: 0,
        hp: [80.00, 91.83, 103.79, 115.88, 128.10, 140.45, 152.93, 165.54, 178.28, 191.15, 204.15, 217.28, 230.54, 243.93, 257.45, 271.10, 284.88, 298.79, 312.83, 327.00],
        cp: [32.00, 36.73, 41.51, 46.35, 51.24, 56.18, 61.17, 66.21, 71.31, 76.46, 81.66, 86.91, 92.21, 97.57, 102.98, 108.44, 113.95, 119.51, 125.13, 130.80],
        mp: [30.00, 35.46, 40.98, 46.56, 52.20, 57.90, 63.66, 69.48, 75.36, 81.30, 87.30, 93.36, 99.48, 105.66, 111.90, 118.20, 124.56, 130.98, 137.46, 144.00],
    },
    
    {
        
    }
];

var Coord = {
    constructor: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    },
    range: function(c1, c2) {
        //c1.x; c2.x; c1.y; c2.y
    return this;
    }
}
var Stats = {
    constructor: function() {
        this.maxCp = '';
        this.maxHp = '';
        this.maxMp = '';
        this.pAtk = '';
        this.pAtkSpd = '';
        this.mAtk = '';
        this.mAtkSpd = '';
        this.sDef = '';
        this.pDef = '';
        this.mDef = '';
        this.speed = '';
        this.critRate = '';
        this.accuracy = '';
        this.evasion = '';
        this.str = '';
        this.con = '';
        this.dex = '';
        this.int = '';
        this.wit = '';
        this.men = '';
        this.curCp = '';
        this.curHp = '';
        this.curMp = '';
        return this;
    }//геттеры
}
var Skill = {
    constructor: function() {
        this.id = '';
        this.level = '';
        this.name = '';
        this.active = '';
        return this;
    }
}
var Person = {
    constructor: function(id, type) {
        this.id = id;
        this.personType = type;
        this.race = '';
        this.class = '';
        this.level = '';
        this.dead = '';
        this.name = '';
        this.title = '';
        this.coord = Object.create(Coord).constructor();
        this.stats = Object.create(Stats).constructor();
        this.misc = {
            ss: ''
        }
        this.buffs1 = [];
        this.buffs2 = [];
        this.bag = {
            inventory: [],
            inventory_l: 0,
            inventory_w: 0,
            marked: -1,
            equipped: {
                weapon: 0,
                shield: 0,
                helmet: 0,
                chest: 0,
                pants: 0,
                gloves: 0,
                boots: 0,
                neck: 0,
                ear1: 0,
                ear2: 0,
                ring1: 0,
                ring2: 0
            },
            use: function(){},
            wear: function(){},
            unwear: function(){},
            destroy: function(){},
            crystalize: function(){},
            droponground: function(){},
            itemAdd: function(){},
            itemDelete: function(){}
        }
        this.skills = {
            list: [],
        };
        this.usePanel = {
            slot: [{type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}, 
                   {type:'', id:'', count:'', reuse:''}
                  ],
            view: 0
        };
        return this;
    },
    loadPerson: function() {
        //грузим с бд по ид расу, класс, левел
        //грузим координаты
        //грузим инвентарь
        //заполняем еквиппед
        //грузим баффы1
        //грузим баффы2
        //грузим скиллы
        //Считаем статы
        //грузим текущие хп, мп, цп
        
        //грузим имя, титул
        //грузим панель-раскладку
        //грузим чат
    //    return this;
    },
    ressurection: function(type) {
    //рес, в город
    //70% хп восстанавливаем
    //exp в зависимости от типа реса
    //если в город, то делаем телепорт в зависимости от текущей зоны и некоторых состояний типа рифт, рсада
    },
    loadInventory: function() {
        //load inventory
    },
    titleChange: function() {
        //change title
    },
    coordChange: function() {
        //change coordinates
    },
    setDead: function() {
        //set dead 0/1
    },
    addBuff1: function() {
        //add buff1
    },
    addBuff2: function() {
        //add buff2
    },
    deleteBuff1: function() {
        //delete buff1
    },
    deleteBuff2: function() {
        //delete buff2
    },
    loadSkillList: function() {
        //load skills
    },
    addSkill: function() {
        //add skill
    },
    deleteSkill: function() {
    //delete skill
    },
    usePanelViewToggle: function() {
        //toggle panel 0-1-2
    },
    usePanelSlotLoad: function() {
        //loading slots
    },
    usePanelSlotUpdate: function() {
        //update(change) slot on panel
    } 
}

var person1, person2;
person1 = Object.create(Person).constructor(9412512, 'player');
person1.race=0;
person1.class=0;
person1.level=20;
person1.buffs1 = [{id: 123, time: 1200},{id: 234, time: 1200},{id: 345, time: 1200}],
person1.bag.inventory = [{objId:123142, id: 6673, count: 1, type: 'bow', equipped: 1, enchant: 6, pAtk:'17', mAtk:'15'}], //type брать из бд по ид, pAtk,mAtk     с учетом заточки
person1.bag.equipped.weapon = 123142;
person2 = Object.create(Person).constructor(9412512, 'player');
person2.race=0;
person2.class=0;
person2.level=20;
person2.buffs1 = [{id: 123, time: 1200},{id: 234, time: 1200},{id: 345, time: 1200}];
person2.bag.inventory = [{objId:123142, id: 6673, count: 1, type: 'bow', equipped: 1, enchant: 6, pAtk:'3', mAtk:'3'}]; //type брать из бд по ид, pAtk,mAtk     с учетом заточки
person2.stats.curCp = 100;
person2.stats.curHp = 100;
person2.stats.curMp = 100;
person2.name = 'CaTz';



function damage(p1, p2) {
    var dmg;
    //проверка включенности сосок
    var ss;
    if(p1.ss) {ss=2;
        } else {ss=1;}
    //рассчет крит или нет по шансу, добавить если одето оружие и парное - 2.04
    var cd;
    //считывает рейт по процентам
    //
    //
    //
    //нужен нормальный рассчет шанса крита
    //
    //
    if((Math.random() * (100 - 0) + 0)<p1.stats.critRate){
        cd = 2;
    } else {cd = 1;}
    //скилл деаз виспер - крит+35% урона
    var cdBonus=1;
    p1.buffs1.forEach(function(item, index, buffs1){
        if(p1.buffs1[index].id === 123 && cd>1) {cdBonus=1.35;}
    });
    //заточена пуха >=6 - 1.042 урон
    var ssBonus=1;
    p1.bag.inventory.forEach(function(item, index, inventory){
        if(p1.bag.inventory[index].enchant >= 6 && p1.bag.inventory[index].equipped === 1) {ssBonus=1.042;}
    });
    
    //скилл статичной прибавки крита (опр.кол-во урона при крите)
    var cdStaticBonus = 0;
    p1.buffs1.forEach(function(item, index, buffs1){
        if(p1.buffs1[index].id === 1234567890 && cd>1) {sdStaticBonus=0;}
    });
    
    //шанс попасть взят из таблицы l2p.l2wh.org -> NonSkillAttacks -> Chance To Hit
    var razn = p1.stats.accuracy - p2.stats.evasion,
        hit=1,
        chance;
    switch(razn){
        case 9: chance = 97.5; break;
        case 8: chance = 97; break;
        case 7: chance = 96.5; break;
        case 6: chance = 96; break;
        case 5: chance = 95.5; break;
        case 4: chance = 94.5; break;
        case 3: chance = 93.5; break;
        case 2: chance = 92.5; break;
        case 1: chance = 91.5; break;
        case 0: chance = 90.5; break; //сработает ли, может надо скобки
        case -1: chance = 89; break;
        case -2: chance = 87.5; break;
        case -3: chance = 86; break;
        case -4: chance = 84.5; break;
        case -5: chance = 83; break;
        case -6: chance = 81.5; break;
        case -7: chance = 80; break;
        case -8: chance = 78.5; break;
        case -9: chance = 77; break;
        case -10: chance = 75.5; break;
        case -11: chance = 73.5; break;
        case -12: chance = 71.5; break;
        case -13: chance = 69.5; break;
        case -14: chance = 67.5; break;
        case -15: chance = 65.5; break;
        case -16: chance = 62.5; break;
        case -17: chance = 59.5; break;
        case -18: chance = 56.5; break;
        case -19: chance = 53.5; break;
        case -20: chance = 50.5; break;
        case -21: chance = 45.5; break;
        case -22: chance = 40.5; break;
        case -23: chance = 35.5; break;
        case -24: chance = 30.5; break;
        case -25: chance = 27.5; break;
        default: chance = 98;
    }if(razn<-25){chance=27.5;}
    if((Math.random() * (100 - 0) + 0)>chance){
        hit = 0;
    }
    //Модификаторы дамага в зависимости от типа оружия: l2p.l2wh.org -> NonSkillAttacks -> Damage Modifiers
    if(hit>0){
        var modMin=0.9, modMax=1.1, sIndex;
        p1.bag.inventory.forEach(function(item, index, inventory){
            if(p1.bag.inventory[index].objId === p1.bag.equipped.weapon) {        
                switch(p1.bag.inventory[index].type){
                    case 'blunt': modMin=0.8; modMax=1.2; break;
                    case 'bow': modMin=0.95; modMax=1.05; break;
                    case 'dagger': modMin=0.95; modMax=1.05; break;
                    case 'dualfist': modMin=0.95; modMax=1.05; break;
                    case 'fist': modMin=0.95; modMax=1.05; break;
                    case 'polearm': modMin=0.9; modMax=1.1; break;
                    case 'pole': modMin=0.9; modMax=1.1; break;
                    case 'sword': modMin=0.9; modMax=1.1; break;
                    case 'etc': modMin=0.9; modMax=1.1; break;
                    case 'spellbook': modMin=0.9; modMax=1.1; break;
                    case 'weaponless': modMin=0.9; modMax=1.1; break;
                }
            }
        });
        hit = (Math.random() * (modMax - modMin) + modMin);
    }
    //В pvp damage*1.05
    var pvpBonus=1;
    if(p1.personType==='player' && p2.personType==='player') {pvpBonus=1.05;}
    
    //critical damage boosts
    //Deflect Arrow/Blunt Weakness/etc	(Weapon Damage)*(Resistance Multiplier)
    
    dmg = hit * ((p1.stats.pAtk * 70 * cd * cdBonus * ss * ssBonus * pvpBonus)/(p2.stats.sDef+p2.stats.pDef)); 
    return {dmg: dmg, critHit: cd};
}

function pAttack(p1, p2) {
        var tim, type;
        p1.bag.inventory.forEach(function(item, index, inventory){
            if(p1.bag.inventory[index].objId === p1.bag.equipped.weapon) {type = p1.bag.inventory[index].type;}
        });
        if(type==='bow') {
            var delay = 3000; //????????перезарядка стрел типа чтоль
            tim=1000/((p1.stats.pAtkSpd/500)*(1500/delay));
        } else {tim=1000/(p1.stats.pAtkSpd/500);}
        var timer = setInterval(function(){
            var damageObj = damage(p1,p2);
            var damageis = damageObj.dmg;
            if(damageis<p2.stats.curCp) {
                p2.stats.curCp=p2.stats.curCp - damageis;
            } else {
                p2.stats.curHp=p2.stats.curHp-(damageis-p2.stats.curCp);
                p2.stats.curCp=0;
            }
            if(p2.stats.curHp <= 0) {
                console.log('Last hit:',Math.round(damageis)+'dmg', '|', p2.name, 'dead!');
                clearInterval(timer);
                return 0;
            }
            //сообщение о крите, если крит
            var critmsg='';
            if(damageObj.critHit>1) {
                critmsg=' - Critical Hit!';
            } else {critmsg='';}
            
            console.log('CP: ' + Math.round(p2.stats.curCp) + '/' + p2.stats.maxCp, 'HP: ' + Math.round(p2.stats.curHp) + '/' + p2.stats.maxHp + '  Damage:' + Math.round(damageis) + critmsg);    
            
            
        }, tim); //pAtkSpd/500 - кол-во ударов в секунду
        //clearInterval(timer); - останавливает счетчик
}


function pAttackStop() {
    //остановка таймера и атаки
}


function statsCount(p){
    p.stats.str = base[p.class].str; 
    p.stats.con = base[p.class].con;
    p.stats.dex = base[p.class].dex;
    p.stats.int = base[p.class].int;
    p.stats.wit = base[p.class].wit;
    p.stats.men = base[p.class].men;
    
    //HP = ((Class Base HP*CON Modifier)*Buffs*Weapon Bonus)+Boost HP+Armor Bonus+M.Def. Bonus
    //The final HP is rounded down.
    p.stats.maxHp = Math.floor(base[p.class].hp[p.level-1]*conMod[p.stats.con-1]);
    //CP = (Class Base CP*CON Modifier)*Buffs*Weapon Bonus+Armor Bonus
    //The final CP is rounded down.
    p.stats.maxCp = Math.floor(base[p.class].cp[p.level-1]*conMod[p.stats.con-1]);
    //Base MP = ((Base MP*MEN Modifier)*Buffs*Weapon Bonus)+Boost Mana+Robe Bonus+Set Bonus+Armor Bonus
    //The final MP is rounded down.
    p.stats.maxMp = Math.floor(base[p.class].mp[p.level-1]*menMod[p.stats.men-25]); //-25 потому что по таблице мен.мод начинается с 25
    
    //P.Atk. = (Weapon P.Atk.*Level Modifier*STR Modifier*Mastery Modifier*Armor Bonus*M.Def. Bonus*Buffs Type 1)+Weapon Mastery+Buffs Type           2+Weapon Bonus
    //The final P.Atk. is rounded down.
    //Still no information on how Weaon SAs apply on P.Atk.    
    var levelModifier=(p.level+89)/100, pAtk, masteryMod;
    //Mastery Modifier
    if(base[p.class].mystic){
        masteryMod=1.450;
    } else {
        masteryMod=1.085;
    }
    if(p.bag.equipped.weapon) {//If equipped - weapon pAtk, if not equipped - fighter=4, mystic=3
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.weapon) {pAtk = p.bag.inventory[index].pAtk;}
        });
    }
    else {
        if(base[p.class].mystic){
            pAtk=3;
        } else {
            pAtk=4;
        }
    }
    p.stats.pAtk = Math.floor(pAtk*levelModifier*strMod[p.stats.str-1]*masteryMod);
    
    //M.Atk. = (Weapon M.Atk.*Level Modifier2*INT Modifier2*Armor Bonus*M.Def. Bonus*Buffs)+Mastery Modifier+Weapon Mastery+Weapon Bonus+Heroic         Berserker
    //The final M.Atk. is rounded down.
    //If equipped - weapon pAtk, if not equipped - fighter=4, mystic=3
    var mAtk=6; //если нет оружие, дефолт 6
    if(p.bag.equipped.weapon) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.weapon) {mAtk = p.bag.inventory[index].mAtk;}
        });
    }
    p.stats.mAtk = Math.floor(mAtk*Math.pow(levelModifier, 2)*Math.pow(intMod[p.stats.int-6], 2)); //int начинается с 6

    //Accuracy = ((square root of DEX)*6)+Level+Weapon Accuracy+Passive+Armor Bonus+Guidance SA+M.Def. Bonus+Buffs
    //The final Accuracy is rounded down.
    
    //P.Def. = (((4+Armor P.Def.)*Level Modifier*Armor Bonus)*Buffs Type 1)+Armor Mastery+Buffs Type 2
    //The final P.Def. is rounded down.
    var defHelmet=12, defGlove=8, defBoot=7, defAll=0, defUpperBody, defLowerBody;
    if(p.bag.equipped.helmet) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.helmet) {defHelmet = p.bag.inventory[index].pDef;}
        });
    }
    if(p.bag.equipped.gloves) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.gloves) {defBoot = p.bag.inventory[index].pDef;}
        });
    }
    if(p.bag.equipped.boots) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.boots) {defBoot = p.bag.inventory[index].pDef;}
        });
    }
    if(p.bag.equipped.chest) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.chest) {defUpperBody = p.bag.inventory[index].pDef;}
        });
    }
    else {
        if(base[p.class].mystic){
            defUpperBody=15;
        } else {
            defUpperBody=31;
        }
    }
    if(p.bag.equipped.pants) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.pants) {defLowerBody = p.bag.inventory[index].pDef;}
        });
    }
    else {
        if(base[p.class].mystic){
            defLowerBody=8;
        } else {
            defLowerBody=18;
        }
    }
    defAll=defBoot+defGlove+defHelmet+defLowerBody+defUpperBody;
    p.stats.pDef=Math.floor((4+defAll)*levelModifier);
    
    //M.Def. = (Jewelry M.Def.*Level Modifier*MEN Modifier*Armor Bonus*Buffs Type 1)+M.Def. Mastery+Buffs Type 2
    //The final M.Def. is rounded down.
    var defNeck=13, defEar1=9, defEar2=9, defRing1=5, defRing2=5, defAllJewels=0;
    if(p.bag.equipped.neck) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.neck) {defNeck = p.bag.inventory[index].mDef;}
        });
    }
    if(p.bag.equipped.ear1) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.ear1) {defEar2 = p.bag.inventory[index].mDef;}
        });
    }
    if(p.bag.equipped.ear2) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.ear2) {defEar2 = p.bag.inventory[index].mDef;}
        });
    }
    if(p.bag.equipped.ring1) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.ring1) {defRing1 = p.bag.inventory[index].mDef;}
        });
    }
    if(p.bag.equipped.ring2) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.ring2) {defRing2 = p.bag.inventory[index].mDef;}
        });
    }
    defAllJewels = defNeck+defEar1+defEar2+defRing1+defRing2;
    p.stats.mDef=Math.floor(defAllJewels*levelModifier*menMod[p.stats.men-25]);
    
    //Accuracy = ((square root of DEX)*6)+Level+Weapon Accuracy+Passive+Armor Bonus+Guidance SA+M.Def. Bonus+Buffs
    //The final Accuracy is rounded down.
    var weaponAcc=0;
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.weapon) {
                switch(p.bag.inventory[index].type){
                    case 'blunt': weaponAcc=4.75; break;
                    case 'bow': weaponAcc=-3.75; break;
                    case 'dagger': weaponAcc=-3.75; break;
                    case 'dualfist': weaponAcc=4.75; break;
                    case 'fist': weaponAcc=4.75; break;
                    case 'polearm': weaponAcc=-3.75; break;
                    case 'pole': weaponAcc=-3.75; break;
                    case 'sword': weaponAcc=0; break;
                    case 'etc': weaponAcc=4.75; break;
                    case 'spellbook': weaponCritModifier=4.75; break;
                    case 'weaponless': weaponCritModifier=4.75; break;
                }
            }
        });
    p.stats.accuracy = Math.floor((Math.sqrt(p.stats.dex)*6)+p.level+weaponAcc);
    
    //Evasion = ((square root of DEX)*6)+Level+Passives+Weapon Bonus+Armor Bonus+Buffs
    //The final Evasion is rounded down.
    p.stats.evasion = Math.floor((Math.sqrt(p.stats.dex)*6)+p.level);
    
    //Base Critical = DEX Modifier*Weapon Critical Modifier
    //Final Critical = Base Critical+Passives+Buffs+Weapon Bonus
    //The Final Critical is rounded down.
    //If you have a Final Critical of higher than 500, it is set as 500.
    var weaponCritModifier=44, critical;
    if(p.bag.equipped.weapon) {
        p.bag.inventory.forEach(function(item, index, inventory){
            if(p.bag.inventory[index].objId === p.bag.equipped.weapon) {
                switch(p.bag.inventory[index].type){
                    case 'blunt': weaponCritModifier=40; break;
                    case 'bow': weaponCritModifier=120; break;
                    case 'dagger': weaponCritModifier=120; break;
                    case 'dualfist': weaponCritModifier=40; break;
                    case 'fist': weaponCritModifier=40; break;
                    case 'polearm': weaponCritModifier=80; break;
                    case 'pole': weaponCritModifier=80; break;
                    case 'sword': weaponCritModifier=80; break;
                    case 'etc': weaponCritModifier=40; break;
                    case 'spellbook': weaponCritModifier=40; break;
                    case 'weaponless': weaponCritModifier=40; break;
                }
            }
        });
    }
    critical = Math.floor(weaponCritModifier*dexMod[p.stats.dex-21]);
    if(critical>500){ critical = 500; }
    p.stats.critRate = critical;
        
    //Speed = ((Class Base Speed*DEX Modifier*Misc. Buffs)+Basic Buffs+Armor Bonus+Passives
    //The final Speed is rounded down.
    p.stats.speed = Math.floor(base[p.class].movespd*dexMod[p.stats.dex-21])
    
    //Atk. Spd = DEX Modifier*Weapon Atk.Spd.*Passives*Buffs*Armor Bonus*Weapon Bonus*M.Def. Bonus+Heroic Berserker
    //The final Atk. Speed is rounded down.
    var weaponAtkSpd=300;
        if(p.bag.equipped.weapon) {
            p.bag.inventory.forEach(function(item, index, inventory){
                if(p.bag.inventory[index].objId === p.bag.equipped.weapon) {
                    switch(p.bag.inventory[index].atkspd){
                        case 'Very Fast': weaponAtkSpd=433; break;
                        case 'Fast': weaponAtkSpd=379; break;
                        case 'Normal': weaponAtkSpd=325; break;
                        case 'Slow': weaponAtkSpd=293; break;
                        case 'Very Slow': weaponAtkSpd=227; break;
                        case 'Weaponless': weaponAtkSpd=300; break;
                    }
                }
            });
        }
    p.stats.pAtkSpd = Math.floor(weaponAtkSpd*dexMod[p.stats.dex-21]);
    
    //Casting Spd. = (333*WIT modifier*Fast Spell Casting)*Armor Multiplier*Armor Bonus*Weapon Bonus*M.Def. Bonus*Buffs*Weapon Penalty+Heroic           Berserker
    //The final cast speed is rounded down.
    p.stats.mAtkSpd = Math.floor(333*witMod[p.stats.wit-1]);    
}

statsCount(person1);
statsCount(person2);
console.log(person1);
console.log(person2);
pAttack(person1, person2);


//чат и окно системных сообщений - просто массивы фикс.размера, в них обьекты чат{'chatid', 'author', 'text'}, окно{'type','text'}
//проверка, если одет objId, есть ли он в инвентаре
//учесть защиту щитом
//учет заточки предметов
//выбрать только одно из двух(dualfist/fist, polearm/pole, etc/spellbook), weaponless - походу без оружия, тоже позаменять где надо
//inventory - массив с огранич. длиной
//разобраться в statsCount с значениями в кавычках(в switch-case)
//как устроен Observer, передавать фотки с сервака на сайт игроку.
//для каждой локи показывать фото
//спарсить фотки мобов и нпц, предметов по ИД

//statsCount(person);
//pAttack(person1,person2);
//pAttackStop();
//damage(person1, person2)); //возвращает кол-во урона