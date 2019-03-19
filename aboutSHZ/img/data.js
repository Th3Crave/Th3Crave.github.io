var data=[];

var dataStr='1、chaimingSmile<br>\
<br>\
2018-10-02 00:54<br>\
你说，国庆快乐<br>\
<br>\
<br>\
2、unicorn<br>\
<br>\
2018-8-22<br>\
今天，你分享了歌曲：想把你留在这里<br>\
<br>\
<br>\
4、theGeminids<br>\
<br>\
2018-12-14<br>\
你说<br>\
“今天的好天气<br>\
突然出现的浪漫yx<br>\
和今晚的双子座流星雨”<br>\
这天晚上我12点去到操场看流星雨，对了，你是双子座的。<br>\
<br>\
<br>\
5、whatAday<br>\
<br>\
2018-12-8<br>\
今天，是小邵追着鸭子喂着鸡的一天<br>\
<br>\
车上的小邵眼睛看着远处<br>\
不知道心里在想什么，总之很是迷人<br>\
<br>\
<br>\
6、At first sight<br>\
<br>\
2018-5-21<br>\
乍见之欢<br>\
A happy encounter is less than a long untiring stay.<br>\
Being happy with first sight is less than with a long stay.<br>\
<br>\
<br>\
7、Meet Another<br>\
<br>\
2018-5-21<br>\
遇见另一种生活<br>\
<br>\
<br>\
8、On the First of June<br>\
<br>\
2018-6-1<br>\
嗯，祝你每一个六一都非常快乐<br>\
无论何时都有人疼爱<br>\
<br>\
<br>\
9、Such a sweet girl<br>\
<br>\
2018-6-14<br>\
嗯，超甜的你！<br>\
<br>\
<br>\
10、Such a sweet girl2<br>\
<br>\
2018-6-14<br>\
嗯，超甜的你！<br>\
<br>\
<br>\
11、On the day 5-5<br>\
<br>\
2018-6-18<br>\
端午节假期快乐的小邵！<br>\
<br>\
<br>\
12、A positive girl<br>\
<br>\
2018-6-24<br>\
小邵说她今天很积极向上！<br>\
<br>\
<br>\
13、no sleep<br>\
<br>\
2018-6-27<br>\
小邵不睡觉干嘛去了？？<br>\
<br>\
<br>\
14、In Jnly<br>\
<br>\
2018-7-1<br>\
七月暴富？！<br>\
<br>\
<br>\
15、Beautiful works<br>\
<br>\
2018-7-1<br>\
这是小邵的作业吗！<br>\
<br>\
<br>\
16、A Tuesday in July<br>\
<br>\
2018-7-4<br>\
七月的一个周二<br>\
<br>\
<br>\
17、Look me in the eyes<br>\
<br>\
2018-7-17<br>\
小邵在看什么呢<br>\
<br>\
<br>\
18、One glance eternity<br>\
<br>\
2018-7-22<br>\
我初初见你 人群中独自美丽<br>\
<br>\
<br>\
19、Billiard girl<br>\
<br>\
2018-7-28<br>\
优雅与魅惑并存<br>\
<br>\
<br>\
20、unicorn and you<br>\
<br>\
2018-8-22<br>\
你和独角兽<br>\
<br>\
<br>\
21、say goodbye to next year<br>\
<br>\
2018-9-1<br>\
你说好像要和明年说再见了 再见的对象是哪位<br>\
<br>\
<br>\
3、theLovelySteps<br>\
<br>\
2019-1-16<br>\
今天，是我跟你第一次互动<br>\
就是这张图片<br>\
我说：“步伐真的nice”<br>\
你说：“这叫可爱！”<br>\
对啊，你确实真的很可爱。<br>\
<br>\
';

var d=dataStr.split('<br><br><br>');

for(var i=0;i<d.length;i++)
{
	var c=d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、',' ')+'.jpg',
		caption: c[0].split('、')[1],
		desc: c[1]
	});
	console.log(c[0].replace('、',' ')+'.jpg');
}