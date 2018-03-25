import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    richText: '<p>1</p><p>即便是穿上了最厚的羽绒服，我还是被北方干燥、刺骨的寒风给冻到了。</p><p>一个月前，我先是坐高铁到了哈尔滨，然后又坐了四个小时的长途汽车在乡间国道上七转八转来，终于到了这里。原计划是我去法院拿案卷先研究一周，做笔记，出一个初步的报告，接着就带这些材料回上海向我师傅汇报工作。可我来了之后没多久就病倒了，高烧不退，我在镇上医院挂水，一问才知道这里最近流感肆虐，已经死了两个人，再这样下去镇长可能瞒不下去，要向卫生局通报。我一边拥挤的通道里提着吊瓶，一边打电话跟师傅汇报这里的情况。</p><p>我师傅是上海名气最大的刑事辩护律师，我一进所里就跟了他。霍律师不穿西装的时候看上去像个混社会的大哥，金链子、金表捆一身。师傅骂起人来脏话连篇，可要是不看这些，他其实还算是个可爱的胖子。</p><p>我又困又累，浑身上下哪儿都疼得厉害，葡萄糖和抗生素丝毫没有让我感到舒服一些。诊室里人声鼎沸，这里人跟人貌似都认识，谁跟谁都能说上话。</p><p>小伙子，你是外地来的吧？好心的病友问我。</p><p>我向他点头示意。</p><p>这个季节，来这儿都是滑雪的，你知道不，就五年前吧，都还没啥人呢，突然之间，人多了，房价也起来了，你看，人一多，这病毒就进来了。</p><p>我不再理会他，他自顾自讲着，还是以前好啊！</p><p>是啊，以前媳妇儿还要靠抢，现在他妈女人多咯。随便做个滑雪教练都能骗到不少女人。</p><p>先前这里确实发生过几起将外面女人拐进来做媳妇的案子，可后来大批开发商涌进来开发旅游业，小地方开放了，那些脏事儿就藏不住了。报纸上连篇累牍的报道，过一阵之后又没了声响，也不知道那些女人们出走了没有，反正这个滑雪小镇的招牌算是立了起来。</p><p>好不容易在走道里占到一个位置，听着身边咳嗽、喷嚏和嘈杂的北方口音，竟然不知不觉睡着了。等我醒来，最后一瓶水也挂完了，我提着空瓶去护士那儿拔了针。出门的时候，小镇已经被白雪覆盖，地上铺了一层薄薄的雪，空中还不断抖落着新鲜的雪花。我赶紧打车回宾馆，一路上觉得身体也轻快了不少。</p><p>打电话定车票，结果因为大雪封路，高速、国道都不让客车走，问了出租，答曰太远了不想去。我只得告诉师傅，我被困在了这里。</p><p>他很着急，还是我安慰他，没事儿，今天挂完水，身体好多了。</p><p>哦，这样，妈的。那你这两天就在宾馆待着。我听到了他点烟的声音，小马，你要是留在那也好，我听说警察找了死者的儿子，你有空也去了解一下。这案子其实没啥可辩的。你看了那么多材料有什么发现没有？</p><p>暂时没有。</p><p>是吧？他深吸一口烟，比较难了，死刑跑不了的。</p><p>是的。我说道。</p><p>他妈的请了我又不配合，头一回碰到这种人。</p><p>这不是非得见了您他才肯开口嘛。犯罪嫌疑人和我会面之后并不跟我谈案情，他说一切等霍律师来了再说。</p><p>他妈的，真倔。</p><p>那越狱出来又杀人的能是一般人吗？</p><p>也是。师傅笑道，你要是回不来，那咱们原计划。这两天你把整理好的材料拍个照片发我。路开了我就来！</p><p><br></p><p>2</p><p>风声在窗外徘徊，我拉开窗帘，早晨滴在窗玻璃上的水珠已经结了冰，形状怪异，像是烧伤皮肤上的疤痕。</p><p>服务员敲了几次门问我要不要打扫，我很费劲地告诉她不必了，厚厚一叠的案卷堆在房间的另一张空床上，这本来是给霍律师睡的。我又看了一眼案情，这虽然不是我从业以来见过最残忍的罪犯，但绝对是胆子最大的之一了。</p><p>一年前，因为强奸被关押在陕西汉中的鹿文新成功越狱，案发过去三个月，警方都没有找到人。</p><p>鹿文新至少强奸过七个人，时间跨度长达数年，作案地点从农村到城市，他作案手法老练，一般都用绳子反绑住受害人，然后将袜子或者内裤塞到姑娘嘴里，最后慢慢折腾。</p><p>警方花了很长时间才抓到这个色魔鹿文新，跟着公诉，最后被判了死缓。谁想到他服刑不到两年，就越狱跑了出来。</p><p>他打晕了狱警，偷了一把枪，一跑就是三个月。</p><p>我一直觉得他如果不是自己非要再次作案，最后未必能被抓住。就在我们接手这件案子的半年之前，在这座冰雪小镇上，一家招待所的服务员因为在客房内听到打斗声报了警，警察到了之后发现了试图逃走的鹿文新，地上躺着一个男人，已经死了，那个人是鹿文新儿时的伙伴，是镇上的黑社会的小头目。</p><p>鹿文新很快认了罪，案子像是赶趟儿似的到了公诉阶段，结果他一上庭就全部翻供，还大吼着叫他家里人给他找个律师。</p><p><br></p><p>3</p><p>雪已经小了不少，可北风依旧凛冽，吹在我脸上像是刀割似的，这个时候我终于明白雷锋帽那两片大耳朵的用处了。走进镇上最大的百货商店，这里有家咖啡店，我和赵柱新约在这里会面。</p><p>等了将近一个小时，喝完了那杯速溶拿铁，证人依旧没有出现，我打电话也没有人接。咖啡厅里只有我和几个前来滑雪的青年，他们穿了专业的滑雪服，看上去既保暖又舒适，我穿着合身的西装在这里看上去非常不合时宜。</p><p>呀，帅哥，你来得太早了吧！这个穿着黑色紧身裤，灰色毛衣的姑娘满头大汗地出现在我的面前，身旁还跟着一个挺漂亮的小伙子，他跟着姑娘冲我傻笑。</p><p>你就是赵柱新吧。我无奈道。</p><p>你是马律师。不好意思，我迟到了。他坐下。</p><p>我们刚去跳舞了！那个女孩子说，我是他女朋友，叫我小璐就行。</p><p>我回想到刚路过游戏城，左边摆了一排夹娃娃机，右边是一台跳舞机。</p><p>本来准备夹个娃娃再走的，可一看都快迟到了我们就赶紧过来，都怪你！是不是？</p><p>赵柱新点头。</p><p>你有什么想问的，其实该说的我都跟警察说了。赵柱新斯斯文文的话不多，看上去也比其他的小镇青年要洋气一些。</p><p>先跟你说声抱歉吧，这个时候还来打扰你。即便见他并没有丧父之痛，我依然将准备好的抱歉的话说出了口。</p><p>没事儿，其实我跟他也没什么，与其说是父子，有时候相处的反倒像是生意伙伴。</p><p>我尴尬地笑笑，你爸爸跟你说过鹿文新找过他？&nbsp;</p><p>他没说，可我见到过。我见他在我家楼下跟我爸嘀咕。</p><p>当时怎么不报警呢？</p><p>那我也不知道这是逃犯哪！其实我们的消息没那么灵通，而且搁你你也看不出来那家伙其实是个杀人犯吧。</p><p>我被问得哑口无言，只好想办法拖延时间再多聊一会儿，不如我请你们吃个午饭吧。</p><p>好呀好呀！太好了，我们被困在这里几天也没吃什么好的。小璐兴奋道。</p><p>你一直生活在镇上？我问道。</p><p>不，我们刚从外地回来。他回答。</p><p>我跟他回来滑雪的，没想到遇上这种事情。她眼角的末梢有颗小小的痣，稍不留神就以为是睫毛的阴影或者自己的错觉。</p><p>我们仨走去商场里看上去最高级的日本料理店，其实就是吃回转寿司。</p><p>反正他杀了人都会被判死刑的吧，我作证重要吗？赵柱新问我。</p><p>这个不好说，毕竟我是鹿文新的辩护律师，不好意思啊。</p><p>有什么好辩的。小璐说着又拿了一盘三文鱼，赵柱新的胃口也非常了得，没一会儿他们俩面前已经堆满了盘子。</p><p>我吃了几份就没胃口了，最后买单走人的时候也觉得怅然若失，今天的会面一无所获。穿上厚重的羽绒服，拎着公文包，我们走回一楼，小璐突然叫住我，哎，马律师，帮我夹个娃娃吧！刚发现还剩一个币。就当是还你的饭，你也玩玩！小璐那种发自内心的快乐很轻易地感染了我，这或许就是青春吧，天大的事情也阻挡不了那份真诚的澎湃。</p><p>我试过了，这里的机器都被故意调松了，不可能抓到的。赵柱新在一旁抱怨。</p><p>我拿着最后一枚游戏币，投进去，左右移动摇杆，抓住那只小鹿，投进了通道口。</p><p>哇！她弯腰拾起玩偶，你真棒！小璐抓住我的肩膀，往我身上跳，高兴地像是抓了狂。</p><p>送你了。</p><p>真送我啦？&nbsp;</p><p>我尴尬地叫她下来，赵柱新默不作声地往游戏城外走。</p><p>你真大方！&nbsp;</p><p>不是什么大不了的东西。</p><p>我没什么可送你的，呐，送一张我的饭卡吧。这是一张学校食堂的纸质卡片，上面还手写着鹿小姐三个字，看见没，很珍贵的，有我的亲笔签名。</p><p>你姓鹿？</p><p>那你叫我鹿璐呗。</p><p>她那副无所谓的样子让人觉得好笑，鹿和赵在此地是大姓，我不知道这里到底有什么渊源，便收下了卡片，工作的重负好像也在那一瞬间被轻松卸下，身体轻飘飘得就像是窗外的雪花。</p><p><br></p><p>4</p><p>雪把小镇封闭了起来，只有小汽车能够进出。霍律师等不及我回上海，他高铁一下车便带着高洁，他另一个徒弟，租了一辆丰田越野车一路赶往这座冰雪小镇。</p><p>小马！你他妈怎么胖了？霍律师的声音爽朗，完全不像是开了四个小时车的样子。</p><p>马律师身体还好吗？我们担心死了。高洁问我，她对我总是客客气气，好像我是她客户似的。</p><p>托你的福，完全康复了。</p><p>这小子会享受啊。好了好了，休假结束，妈的，直接去看守所吧。没坐一会儿，我们便跟着霍律师，往看守所疾驰而去。</p><p>距离开庭的时间越来越近了，可鹿文新看上去却一点都不紧张。</p><p>枪在哪儿？霍律师将材料往桌上一摆，双手交叉摆在桌上，像尊石佛似的定在那儿一动不动，我想如果他今后要转行做检察官或者法官一定也相当成功。</p><p>霍律师你好。他之前对我也这样扮斯文，装模作样的，我看了一眼高洁，她打开笔记本，开始做记录。</p><p>咱们没时间了，省掉那些没意思的寒暄吧，你请我来就是做事的，我的工作是尽量帮你做到最后罪责刑相适应。</p><p>我没杀人，也不知道枪在哪里。他说完松口气，靠在椅背上，手和脚被固定在椅子上，只有背可以稍微放松一些。</p><p>那你之前为什么承认。</p><p>我不认他们也不会信我。</p><p>你是在犯罪现场被抓的！霍律师觉得自己被侮辱了，提高了音调，我甚至都怕他一气之下离桌走人。</p><p>他身子像前倾，叫霍律师靠过去，鹿文新轻声说，我喝多了，醒来的时候人已经死了。</p><p>即便你那么说我也不可能让你无罪的，我不是上帝！难道那十几刀是他自己捅自己的吗？</p><p>我知道你不是，可我说了，我没有杀人，我也知道自己死罪可免，活罪难逃，我没必要骗你。</p><p>霍律师平静下来，那你说说你为什么要去那儿！</p><p>是泥子让我去的，之前跟他说了借点钱，他放高利贷的，最后约了在那招待所见面。</p><p>查过录像了吗？霍律师问我。</p><p>招待所根本没有摄像头，只有前台两个班的服务员一共四个人看着。</p><p>你们俩怎么联系上的？为什么约在这个地方？</p><p>我打电话给他，泥子就住这镇上，我们老家嘛，最危险的地方就是最安全的地方，我又熟悉，四周环山，安全，容易逃。</p><p>这倒是真的。霍律师说。</p><p>那天他约我去，告诉了我房号，我进去，跟他喝了几杯酒，没一会儿就晕乎乎睡着了。醒来就是那样了，再跑，来不及了。</p><p>你们俩有没有什么经济上的纠纷？</p><p>没有！我没必要杀他！泥子跟我是出生入死的，揭发我对他一点好处都没有！</p><p>那房间除非有第三个人进去过，不然只能是你杀的人。高洁停下了打字，会见室里安静地只有脚链跟水泥地摩擦发出慵懒又磨人的声音。</p><p>房间号是他跟你发信息还是打电话说的？霍律师继续问。</p><p>我没有手机，我用公共电话打给他，他说能帮我安排住进招待所，晚上跟我喝会儿酒。</p><p>你喝多了就什么都不记得了？喝得什么酒那么上劲？高洁问道，会不会是这样，你喝了酒之后杀了人，但你真的忘记了有这么一回事。</p><p>鹿文新低头不语。</p><p>我他妈的看这里有文章！霍律师拍桌子道。</p><p>霍律师带了几分文件，在会见的最后交给鹿文新，你签个字吧，几份补充代理协议。</p><p>我还是按手印吧，你们有红章吗？他问我。</p><p>高洁从自己的百宝箱里掏出一块印章的红泥递给他。</p><p>走出看守所，雪已经在越野车上积了厚厚一层，我问门卫要了扫帚将雪刮开，高洁站在我身边帮我提着一大叠的文件。大风吹过，她一个趔趄，摔倒在地上，文件随风飞舞。</p><p>霍律师赶紧上前帮忙收拾文件，他高声问我们，你们知道我他妈为什么会相信他吗？</p><p>我费劲地收拾文件根本没空搭理他。</p><p>因为那种临死前的坦然是装不出来的！霍律师的呼喊怎么也敌不过风声。</p><p><br></p><p>5</p><p>我跟霍律师辗转难眠，几乎一夜未睡。翻遍了案卷的所有资料，也找不到任何可以证明鹿文新没有杀人的证据。</p><p>赵柱新那儿提供了什么线索没有？霍律师问道。</p><p>他挺确定的吧，鹿文新问他爸借过钱，而且有合同。这些都作为证据提交给检方了，对我们来说只有负面影响。</p><p>他爸还跟谁结仇没有？</p><p>放高利贷的，说有仇总有仇家，可他说自己爸爸彪悍得很，镇上没人敢动他的。</p><p>赵柱新是个什么样的人？</p><p>挺温顺的一个小孩儿吧，他现在在外面上中专呢，看上去文绉绉的，不像镇上的。我回忆着他的样子，脑子不自觉地想到了小璐。</p><p>嗯。霍律师沉吟片刻，叫小高再去一趟，这个小男生啊，可能还是需要高洁这种类型的姐姐才能撬动他的嘴。</p><p>第二天一早，我、霍律师跟高洁兵分两路，她去找赵柱新，我跟霍律师去那间我已经去了两趟的招待所。</p><p>招待所在镇子的东边。</p><p>坐班的正好是检方的证人，你好！霍律师打招呼，我们是鹿文新的律师。</p><p>她冲我笑笑，见过了见过了。</p><p>出事那天也是你当班？</p><p>没错。</p><p>你对鹿文新印象深刻吗？他跟受害人谁先到的。</p><p>服务员有些不好意思，其实我跟这个马律师也说过好几次了，像你们要是来一次，我肯定记住了。可是你看我们这里，来来往往的那些人，看上去都差不多嘛！要是真的有档次的，来这里开发旅游业的大老板，肯定也得住镇上的大宾馆，对吧！</p><p>关键是那间房里是不是就只进去过两个人？霍律师问道。</p><p>你这个是为难我咯。我真记不得啦。</p><p>谁开的房，鹿文新还是被害人？</p><p>不记得。</p><p>你当时听到斗殴的声音所以报的警？</p><p>是的。</p><p>没敲门进去看看？</p><p>我哪敢看哦，我们这里，说实话，经常有逃犯来住的。每天晚上值班又只有一个人，听到声音赶快报警了呀！</p><p>霍律师扫了一眼前台的陈设，你们有没有什么收据，押金单之类的东西，就是入住凭证。</p><p>凭证没有，押金单倒是有的，一百块钱。她一边说一边回到座位上，拉开抽屉。</p><p>警察没要走吗？我问道。</p><p>太多咯，我这里太乱了，找到也没什么用嘛！当场抓住的。</p><p>霍律师不耐烦地敲着桌子，我跟高洁发信息，她和我抱怨他们俩根本就是个混吃混喝的主，什么有用的信息都没有，反而白白请人吃喝。我笑了笑，鹿璐那副吃饱了撑的样子又浮现在我眼前。</p><p>呐，你们拿去吧！服务员丢了厚厚一叠纸在我面前，这是全部的了。再多可能要去库房找了。</p><p>我跟霍律师开了一间房，将所有的押金单铺在床上，大海捞针一般寻找着那一天入住的客人。其实就算找不到受害人或者是鹿文新的名字也毫不奇怪，因为只是交了钱却没有签名的情况很多，这并不能证明当天有第三人进去过，可是如果找到了被害人或者鹿文新的名字，那至少就证明那所谓的出现第三个人的可能性又少了一点。</p><p>霍律师知道面对的是这样看上去有些绝望的搜索，在屋里疯狂地吞吐着新买的电子烟，我偶尔回复一下高洁的信息，一面加快速度争取在中午之前看完所有的单据。</p><p>赵柱新跟那小妞儿买了明天早上的客车回去，还跟我问东问西好像我们能给他俩报销路费似的！高洁愤愤不平。</p><p>没事儿了赶紧来招待所，我跟师傅俩都看不完这些材料！我回她信息。</p><p>他妈的，其实自己想想，越了狱还敢杀人，应该早就做好死的准备了吧，你要说他那坦然是演的，也不是没道理。霍律师总结道，我心想，师傅，您有心思想这些不如也帮我看看单据呗。</p><p>这些单据的日期全是乱的，好不容易找到了几张案发当日的单据，我都如获至宝一般。</p><p>终于！我找到了那张绿底黑字的单据，上面歪歪扭扭写了三个字，鹿文新。</p><p>妈的，老子还是被耍了！霍律师拍案，他起身狠抽了两口烟，走，他妈把那委托协议全给他妈解除了！</p><p>我们下楼，高洁正好到，一起上车，霍律师在并不宽敞的道路上超速行驶，很快开到看守所的门口。</p><p><br></p><p>6</p><p>不是我写的。第一次，在我们面前，鹿文新显得如此狼狈。</p><p>这些是委托协议，你看见里面的违约条款没有。你欺骗了我们，我告诉你，这个证据我暂时不会提交给任何人，但从这一刻起，我不再是你的委托律师。签了这份解除委托的协议书，我们说拜拜！霍律师那副社会老大哥的样子摆在面前，气势一点也不输给这个丧心病狂的犯罪分子。</p><p>鹿文新提起笔，颤颤巍巍地悬在空中很长时间，最后长叹一口气，我不识字。</p><p>我自己的名字也不会写。他对着已经站起身的霍律师如此说道，空气一下子又变得安静了起来。</p><p>为什么有人要害你！重新坐下的霍律师打量着那张押金单。</p><p>恨我呗，恨我的人多了。他是指那些受害女性以及她们的家人。</p><p>你想想有没有谁是最恨你的。</p><p>真没有，我哪记得这些。要说恨，都恨。鹿文新苦笑道。</p><p>不管怎么样这都可能成为本案的关键证据，我明天会立刻向法院申请。霍律师再一次站起身，这时候他看起来既专业，又像少年般踌躇满志，我知道这是我们要赢下官司的标志。</p><p>我要说一个人，你们可能不信。鹿文新沉思了片刻，最后说道，最恨我的可能是我那老婆。</p><p>你也强奸了她？</p><p>不，我没强奸过她，她是被拐去我们村的，我妈买了她做媳妇，我没有强奸她。</p><p>你怎么知道她恨你。</p><p>她恨我们村所有人，其实看上去挺温柔的一女人。确实来我们村被折腾惨了，后来小孩儿也生了，我又想出去闯闯，寻思就把她放了。</p><p>鹿文新用手摸了摸那一份写满了天书的协议，继续说道，可她走的那天告诉我，这辈子不会放过我们，我后悔了，不想放她了，又抓她回来按草堆上干了一回，嘿，干完了又想放她走了，就真的让她走了。</p><p>我们沉默着听完了她的故事，我没见过那个女人。可自从几个小时之前，看到那张押金单上的签名开始，我就觉得一切都是那么的熟悉，透过笔芯的墨点我仿佛看到了那对深邃的眸子和那颗小的不能再小的痣。</p><p>你说我是不是有病？鹿文新问道。</p><p><br></p><p>7</p><p>我告诉师傅，我有一件事情要去调查清楚，明天中午之前一定给他一个交代，在此之前，希望他能按兵不动。师傅答应了我，给了我最后的十二个小时。</p><p>赵柱新的电话打不通，我不知道他们住在哪里，问了好几间旅社，都查无此人，我开着师傅的车在市中心晃悠，一个激灵想到了那个商场的游戏城。</p><p>男孩儿抱着厚重的羽绒服坐在抓娃娃机旁的一张长凳上，小璐步伐轻快地在跳舞机上摆动身子，她和那种纯粹踩点动脚的门外汉不一样，她好像真的在跳舞，每个脚步、甚至是手上的动作都连贯而具有美感。</p><p>等她跳完换下一首的时候，我仍站在原地一动不动，大概是没游戏币了，她转身向男孩子索要，这个时候他们同时看到了我。</p><p>聊两句吗？我问道。</p><p>聊什么呀？再帮我买三十个币就跟你聊。她俏皮道。</p><p>我在一旁的柜台上帮她买了六十个，放在她面前，她快乐地拿了一些出来，交到男孩儿的手上，你玩你的，这一半是我的。</p><p>于是，情况就成了我帮他们看着衣服，坐在那张长椅上，小璐跟着音乐开始了新的舞蹈。我把衣服放在椅子的一边，摆弄着上回我送给她的小鹿的玩偶。</p><p>你知道为什么人类虽然也吃鹿肉，但鹿却跟牛羊不一样，没什么人养鹿？她问我。</p><p>我不知道。</p><p>因为鹿根本没办法被圈养！你看，羊群只要有领头羊，其他羊都会乖乖听它的，可是鹿不一样，看上去那么温顺，可她机敏着呢，有自己的想法，你很难去驯服她的。</p><p>她气喘吁吁地走下跳舞机。</p><p>那我该叫你鹿小姐吗？我把那张签了鹿文新名字的单据拿出来，给她看，还是鹿先生？</p><p>我给你讲个故事吧，有个小女孩儿，她妈妈对她很好，从小就把自己所拥有的一切都给了她，即便她们拥有的并不多。可是她妈妈一直有块心病，一想到那块心病她就疯狂地打骂她的女儿，小女孩儿一直觉得自己生活在天堂和地狱的边缘，直到有一天她的妈妈告诉她，那块心病的由来，她妈妈曾经被拐去了很远的山区，手脚被打断，花了很久的时间才愈合。而在伤口愈合的那段时间，村里的男人又在她身上留下了新的伤口。她在村里生了几个孩子之后逃离了村子，之后就有了女孩儿。她没有给女孩儿改姓，就是为了让她和自己都永远记得当初所受到的所有的伤害。女孩儿决定要帮妈妈复仇，她答应妈妈，把妈妈的痛当做是自己的痛，将妈妈的仇当做自己的仇！</p><p>她们一直等待着一个复仇的机会。女孩儿联系到了自己同母异父的弟弟，让他爱上了自己，村里的关系太乱了，谁的儿子过继给了谁，谁的女儿嫁给了近亲，可那女孩儿心里一面明镜似的。她知道那个伤害自己妈妈最深的人要回到这里，她也知道他会找一个人，这是她妈妈告诉她的，这两个恶人干坏事儿总是绑一块儿的。</p><p>女孩想尽办法，只有贡献出自己的身体，才能得到他的信任，于是就装作是为了钱而离家出走的少女，投奔了那个男人，做了他的小情人，打听到了他那个越狱的兄弟要来投奔他的确切消息。</p><p>我说了那么多，你能明白多少呢？小璐最后问我，她的脸上笑意全无，原来她不笑的时候，眼角的痣还是挺显眼的，不大，却很深刻。</p><p>我一个人在长椅上坐了很久，他们俩早就离开了，一直到商店关门，我失魂落魄地走回车里。车还没有发动，我一个人裹紧了棉袄，却还是被冻得瑟瑟发抖。一抬头，发现天暗了，雪也停了。</p><p>小镇的大巴每天早上八点集中发车，我一夜未归，手机振动个不停，高洁和师傅跟我打了许多个电话，我干脆关了机。</p><p>我把车停在路边，厚重的云层逐渐消散开去，我跑进汽车站，寻找着那个像小鹿般灵动的女孩儿。她正提着行李跟男孩儿坐在椅子上休息。她带着一顶红色的绒线帽。</p><p>小璐也看到我了，她没有闪避眼神，而是径直朝我走过来。</p><p>马律师，你来提前给我过生日吗？过了今天，我就十八岁了。</p><p>我不知道该说些什么，作为律师，还是作为一个朋友，我不知道在她眼里，我们算不算是朋友。</p><p>如果说，我不让你走呢？</p><p>跟着她一起走过来的赵柱新，从兜里拿出枪把儿在我面前一晃，然后很快放回了口袋，他看着我，眼神坚定。</p><p>你是想让我留下？留在你的身边还是留我上法庭？她看着我，我望着她的眼睛，那双黑色的眸子里有我的影像，透过了她的眼睛，我看到了自己。</p><p>你看看那个进站口。今天是长途客运车恢复运营的第一天，被滞留在此地的开发商，前来滑雪的旅人和希望走出小镇的青年都一齐涌了进来。</p><p>狮子还是鹿，好人还是坏人，我随便指指哪一个，其实你也说不上来具体哪个是哪个吧。她准备离开，我突然抓住她的手，她显然被我的动作给吓了一跳，我从未见她的眼神如此惊慌失措过，我笑了，用尽我毕生所见的温柔，对她说道，生日快乐，鹿小姐，如果我们以后再也见不到，我祝你一生平安。</p><p>然后我放开了手。</p><p>她跟随着那些好人、坏人一齐消失在去往外面世界的人潮汹涌之中。</p>'
  }
})

export default store
