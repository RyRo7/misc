// (function () {
// 'use strict';
//
// angular.module('adventOfCodeDay', [])
// .controller('dayController', function ($scope) {
//     $scope.adventDay = "4";
//     $scope.part1Question = "What is the sum of the sector IDs of the real rooms?";
//     $scope.part2Question = "";

    var dataArray = [
    "fubrjhqlf-edvnhw-dftxlvlwlrq-803[wjvzd]",
    "kzgwomvqk-rmttgjmiv-lmxizbumvb-902[zmnji]",
    "dkqjcbctfqwu-dwppa-fgukip-596[syiua]",
    "xjinphzm-bmvyz-ytz-gjbdnodxn-135[nzbdj]",
    "uwtojhynqj-hfsid-xytwflj-177[ztsqu]",
    "udpsdjlqj-fkrfrodwh-ilqdqflqj-491[uscwt]",
    "kdijqrbu-fbqijys-whqii-sedjqydcudj-790[dijqb]",
    "udpsdjlqj-hjj-uhdftxlvlwlrq-439[jldhq]",
    "bnmrtldq-fqzcd-bqxnfdmhb-bgnbnkzsd-zmzkxrhr-105[bdnzm]",
    "lejkrscv-wlqqp-sleep-ivrthlzjzkzfe-789[elzjk]",
    "zlilocri-ciltbo-obxznrfpfqflk-419[spmzt]",
    "tyepcyletzylw-nsznzwlep-qtylyntyr-821[shmzu]",
    "ynssr-vtgwr-lmhktzx-865[kyqlr]",
    "crwwv-pzxsbkdbo-erkq-pxibp-991[bpkrw]",
    "uiovmbqk-ziuxioqvo-zijjqb-bmkpvwtwog-616[sizek]",
    "qfmcusbwq-foppwh-cdsfohwcbg-194[cfwbh]",
    "nvrgfezqvu-irsszk-drerxvdvek-477[tvzgs]",
    "otzkxtgzoutgr-hatte-jkbkruvsktz-748[yutkm]",
    "ksodcbwnsr-qcbgiasf-ufors-pibbm-rsdzcmasbh-298[sbcra]",
    "dmbttjgjfe-qmbtujd-hsbtt-bobmztjt-259[mkyef]",
    "lnkfaypeha-bhksan-wymqeoepekj-836[lcygv]",
    "zekvierkzferc-treup-ljvi-kvjkzex-789[ekrvz]",
    "ajyqqgdgcb-djmucp-mncpyrgmlq-626[cyuom]",
    "sbnqbhjoh-fhh-bdrvjtjujpo-857[bmhse]",
    "surmhfwloh-iorzhu-vklsslqj-829[hlsor]",
    "ymszqfuo-nmewqf-iadwetab-690[unsbc]",
    "gpewwmjmih-tpewxmg-kveww-xvemrmrk-464[mrtux]",
    "rzvkjiduzy-nxvqzibzm-cpio-mzxzdqdib-395[lnkyz]",
    "qzoggwtwsr-suu-kcfygvcd-766[gcsuw]",
    "molgbzqfib-bdd-rpbo-qbpqfkd-679[tljei]",
    "gcfcnuls-aluxy-vcibutulxiom-vohhs-uhufsmcm-110[mstvf]",
    "nzcczdtgp-clmmte-lylwjdtd-561[puhls]",
    "hqcfqwydw-fbqijys-whqii-ijehqwu-166[czvwd]",
    "ytu-xjhwjy-wfintfhynaj-uqfxynh-lwfxx-xjwanhjx-567[syfzw]",
    "ujoon-ytaanqtpc-itrwcdadvn-895[ntmsp]",
    "xzwrmkbqtm-xtiabqk-oziaa-zmamizkp-460[amzik]",
    "rwcnawjcrxwju-snuuhknjw-jlzdrbrcrxw-979[rwjcn]",
    "oknkvcta-itcfg-ecpfa-octmgvkpi-414[cktaf]",
    "kdijqrbu-uww-mehaixef-348[oyzxu]",
    "ncjzrpytn-hplazytkpo-prr-hzcvdsza-249[yvxgz]",
    "qczcftiz-pibbm-hfowbwbu-870[bcfiw]",
    "xqvwdeoh-fdqgb-dftxlvlwlrq-777[ymaiz]",
    "rgllk-qss-ruzmzouzs-482[ynsqw]",
    "eadalsjq-yjsvw-jsttal-ksdwk-112[mlgwj]",
    "sbqiiyvyut-isqludwuh-xkdj-efuhqjyedi-166[iudqy]",
    "ziuxioqvo-kpwkwtibm-xczkpiaqvo-382[jucqm]",
    "jef-iushuj-sqdto-seqjydw-skijecuh-iuhlysu-322[sbnmo]",
    "hqcfqwydw-uww-sedjqydcudj-816[krxlq]",
    "shmml-qlr-znexrgvat-741[twjzq]",
    "elrkdcdugrxv-gbh-pdunhwlqj-153[sunto]",
    "nsyjwsfyntsfq-gfxpjy-hzxytrjw-xjwanhj-385[jyfns]",
    "irdgrxzex-sleep-jkfirxv-867[ikstj]",
    "mybbycsfo-mkxni-dbksxsxq-666[nmotl]",
    "xmtjbzidx-xcjxjgvoz-mznzvmxc-525[acpvh]",
    "zilqwikbqdm-ntwemz-zmikycqaqbqwv-642[cxfge]",
    "pkl-oaynap-xwogap-iwjwcaiajp-290[cedyr]",
    "zlilocri-ciltbo-zrpqljbo-pbosfzb-757[bloiz]",
    "foadouwbu-suu-aobousasbh-896[uoabs]",
    "lzfmdshb-okzrshb-fqzrr-zbpthrhshnm-859[poznx]",
    "wifilzof-mwupyhayl-bohn-nywbhifias-994[neotf]",
    "pbybeshy-rtt-ynobengbel-845[beynt]",
    "ohmnuvfy-mwupyhayl-bohn-guleyncha-188[sdqab]",
    "mvhkvbdib-wpiit-mzvxlpdndodji-811[uxmls]",
    "jxdkbqfz-oxyyfq-pqloxdb-991[qxbdf]",
    "sxdobxkdsyxkv-lexxi-nocsqx-640[jlfha]",
    "shoewudys-sqdto-jhqydydw-478[dsyho]",
    "xtwtelcj-rclop-upwwjmply-epnsyzwzrj-821[kdcvu]",
    "sehheiylu-vbemuh-qsgkyiyjyed-192[rmqpn]",
    "fmsledevhsyw-fyrrc-wxsveki-516[bzgvw]",
    "jfifqxov-doxab-pzxsbkdbo-erkq-jxkxdbjbkq-939[bxkdj]",
    "bnknqetk-cxd-bnmszhmldms-547[jcdas]",
    "jsehsyafy-vqw-dgyaklauk-996[ayksd]",
    "rdadguja-qjccn-uxcpcrxcv-921[gyvhm]",
    "lxuxaodu-mhn-bnaerlnb-693[nablu]",
    "ymszqfuo-otaoaxmfq-pqhqxabyqzf-794[kvfeg]",
    "ykhknbqh-bhksan-hwxknwpknu-238[hswtq]",
    "veqtekmrk-tpewxmg-kveww-hitpscqirx-646[mpoxs]",
    "zhdsrqlchg-pdjqhwlf-edvnhw-vwrudjh-491[hdwjl]",
    "tcrjjzwzvu-upv-jvimztvj-867[xbyim]",
    "qzchnzbshud-qzaahs-dmfhmddqhmf-261[gxmsf]",
    "vxupkizork-xghhoz-zkinturume-488[brhyz]",
    "raphhxuxts-hrpktcvtg-wjci-sthxvc-765[htcxp]",
    "ujqgywfau-wyy-mkwj-lwklafy-164[wyafj]",
    "ubhatstkwhnl-unggr-wxiehrfxgm-553[yqtez]",
    "gifavtkzcv-vxx-jkfirxv-971[vxfik]",
    "xgjougizobk-hatte-xkgiwaoyozout-150[vsazb]",
    "nij-mywlyn-mwupyhayl-bohn-womnigyl-mylpcwy-734[ysutv]",
    "kwtwznct-kivlg-kwibqvo-tijwzibwzg-850[wiktz]",
    "nij-mywlyn-wuhxs-wiuncha-yhachyylcha-266[aznkv]",
    "pkl-oaynap-bhksan-nayaerejc-602[phqso]",
    "oxjmxdfkd-zxkav-zlxqfkd-lmboxqflkp-419[xkdfl]",
    "jshzzpmplk-zjhclunly-obua-zopwwpun-617[vzouh]",
    "xgvnndadzy-ezggtwzvi-xpnojhzm-nzmqdxz-499[zndgx]",
    "glrcplyrgmlyj-aylbw-amyrgle-amlryglkclr-938[abmon]",
    "xcitgcpixdcpa-hrpktcvtg-wjci-igpxcxcv-219[cipxg]",
    "muqfedyput-isqludwuh-xkdj-udwyduuhydw-868[udwyh]",
    "fkqbokxqflkxi-yflexwxoalrp-pzxsbkdbo-erkq-absbilmjbkq-159[bkxlq]",
    "tmrszakd-cxd-zbpthrhshnm-781[hdmrs]",
    "kpvgtpcvkqpcn-ejqeqncvg-wugt-vguvkpi-284[efhns]",
    "xqvwdeoh-mhoobehdq-frqwdlqphqw-933[jzuyw]",
    "pynffvsvrq-wryylorna-bcrengvbaf-689[rfnvy]",
    "qmpmxevc-kvehi-fyrrc-wepiw-932[entmr]",
    "qzlozfhmf-bzmcx-bnzshmf-knfhrshbr-755[fhzbm]",
    "awzwhofm-ufors-rms-obozmgwg-610[omwfg]",
    "emixwvqhml-kpwkwtibm-lmxizbumvb-460[nkcey]",
    "zgmfyxypbmsq-hcjjwzcyl-asqrmkcp-qcptgac-652[fnjvm]",
    "yaxsnlcrun-ljwmh-mnyjacvnwc-901[vbxwn]",
    "buzahisl-jhukf-jvhapun-thyrlapun-435[gcdyo]",
    "jsvagsulanw-hdsklau-yjskk-kzahhafy-476[qkyzs]",
    "rzvkjiduzy-agjrzm-yzqzgjkhzio-135[zjgik]",
    "udglrdfwlyh-edvnhw-zrunvkrs-205[drhln]",
    "mrxivrexmsrep-jpsaiv-pefsvexsvc-698[esvpr]",
    "xzwrmkbqtm-kzgwomvqk-zijjqb-nqvivkqvo-642[cabgs]",
    "rzvkjiduzy-zbb-nvgzn-551[zbnvd]",
    "ncjzrpytn-nsznzwlep-ecltytyr-327[ntyzc]",
    "raphhxuxts-gpqqxi-bpcpvtbtci-115[nzslk]",
    "fmsledevhsyw-gerhc-wxsveki-100[stmxw]",
    "rgndvtcxr-xcitgcpixdcpa-uadltg-rdcipxcbtci-531[cditx]",
    "rdadguja-snt-igpxcxcv-895[acdgx]",
    "ide-htrgti-rdggdhxkt-ytaanqtpc-htgkxrth-921[tcpfv]",
    "sawlkjevaz-ywjzu-klanwpekjo-758[ajkwe]",
    "hjgbwuladw-jsvagsulanw-hdsklau-yjskk-kwjnauwk-996[ucavp]",
    "wfummczcyx-dyffsvyuh-xyjulngyhn-188[xnufp]",
    "yuxufmdk-sdmpq-omzpk-pqbxakyqzf-690[pstoj]",
    "wfummczcyx-willimcpy-vumeyn-yhachyylcha-708[piodu]",
    "sxdobxkdsyxkv-cmkfoxqob-rexd-nozkbdwoxd-614[nmdwp]",
    "dmbttjgjfe-gmpxfs-vtfs-uftujoh-961[ftjgm]",
    "lnkfaypeha-zua-skngodkl-732[zyntx]",
    "hqtyeqsjylu-uww-kiuh-juijydw-530[ujwyh]",
    "mbiyqoxsm-zvkcdsm-qbkcc-yzobkdsyxc-146[onlmp]",
    "wlqqp-upv-ivtvzmzex-165[fmczd]",
    "cjpibabsepvt-fhh-dvtupnfs-tfswjdf-389[bzdyv]",
    "kzgwomvqk-jcvvg-bmkpvwtwog-252[zelhm]",
    "htsxzrjw-lwfij-hfsid-htfynsl-ywfnsnsl-567[ivjzs]",
    "ide-htrgti-qphzti-gtprfjxhxixdc-401[fcapt]",
    "qvbmzvibqwvit-uiovmbqk-xtiabqk-oziaa-lmxizbumvb-564[rotyq]",
    "diozmivodjivg-ytz-yzkvmohzio-109[omrxn]",
    "njmjubsz-hsbef-qmbtujd-hsbtt-eftjho-701[bjths]",
    "krxqjijamxdb-snuuhknjw-anbnjalq-433[tkemh]",
    "avw-zljyla-yhiipa-ylzlhyjo-149[zphyt]",
    "nzydfxpc-rclop-clmmte-pyrtyppctyr-899[mjzsr]",
    "bqxnfdmhb-oqnidbshkd-rbzudmfdq-gtms-knfhrshbr-365[bdhfm]",
    "nvrgfezqvu-treup-tfrkzex-rercpjzj-347[rezfj]",
    "gcfcnuls-aluxy-wuhxs-wiuncha-fiacmncwm-526[cuanw]",
    "amjmpdsj-djmucp-kypicrgle-964[ftznh]",
    "hvbizodx-wvnfzo-mzxzdqdib-655[dzcnu]",
    "tagzsrsjvgmk-jsvagsulanw-vqw-vwhsjlewfl-892[tjlop]",
    "mvkccspson-mrymyvkdo-bomosfsxq-952[mosck]",
    "lqwhuqdwlrqdo-fkrfrodwh-frqwdlqphqw-153[jnwkm]",
    "surmhfwloh-mhoobehdq-uhdftxlvlwlrq-153[nyvqs]",
    "dlhwvupglk-ibuuf-klclsvwtlua-565[doeyn]",
    "pwcvonofrcig-gqojsbusf-vibh-fsoqeiwgwhwcb-376[jcdlh]",
    "muqfedyput-hqrryj-efuhqjyedi-998[equyd]",
    "hwbba-hnqygt-fgrctvogpv-466[slvyu]",
    "wfummczcyx-wbiwifuny-xyjulngyhn-916[spycn]",
    "zilqwikbqdm-xtiabqk-oziaa-mvoqvmmzqvo-304[rxhzs]",
    "xzwrmkbqtm-ntwemz-nqvivkqvo-954[gztdk]",
    "dyz-combod-lkcuod-bomosfsxq-198[zyvju]",
    "pbafhzre-tenqr-enoovg-phfgbzre-freivpr-455[cakfs]",
    "tfcfiwlc-avccpsvre-jkfirxv-217[obgiy]",
    "udpsdjlqj-gbh-vdohv-257[fpnes]",
    "bwx-amkzmb-moo-zmkmqdqvo-330[whxfs]",
    "raphhxuxts-tvv-jhtg-ithixcv-401[fyiab]",
    "sorozgxe-mxgjk-laffe-vrgyzoi-mxgyy-xkykgxin-878[vkjnu]",
    "clotzlnetgp-mldvpe-epnsyzwzrj-613[qdmpu]",
    "gokzyxsjon-zvkcdsm-qbkcc-domrxyvyqi-224[ckoyd]",
    "mtzslklcozfd-ojp-hzcvdsza-795[hvasg]",
    "pxtihgbsxw-cxeeruxtg-labiibgz-475[ztyng]",
    "mtzslklcozfd-nsznzwlep-cplnbftdtetzy-353[zuofx]",
    "emixwvqhml-moo-zmamizkp-538[hvrjm]",
    "foadouwbu-pibbm-oqeiwgwhwcb-168[mfiwn]",
    "qyujihctyx-mwupyhayl-bohn-jolwbumcha-240[hyuab]",
    "sxdobxkdsyxkv-pejji-mkxni-ckvoc-926[bktwh]",
    "nglmtuex-ietlmbv-zktll-etuhktmhkr-345[tlekm]",
    "qekrixmg-tpewxmg-kveww-wepiw-724[wegik]",
    "oaddaeuhq-dmnnuf-fdmuzuzs-326[ersqt]",
    "ktwbhtvmbox-xzz-vnlmhfxk-lxkobvx-943[yzabx]",
    "zvyvgnel-tenqr-enoovg-npdhvfvgvba-117[cadbz]",
    "vhehkyne-vtgwr-lmhktzx-579[hektv]",
    "kzgwomvqk-zijjqb-bmkpvwtwog-148[njtma]",
    "fubrjhqlf-fdqgb-zrunvkrs-907[ormsl]",
    "oqnidbshkd-rbzudmfdq-gtms-kzanqzsnqx-859[suagv]",
    "upq-tfdsfu-dboez-mbcpsbupsz-779[srtpm]",
    "ugjjgkanw-hdsklau-yjskk-lwuzfgdgyq-632[gkjua]",
    "oxmeeuruqp-ngzzk-fqotzaxask-326[aymzt]",
    "eqnqthwn-dcumgv-ugtxkegu-596[nfath]",
    "ygcrqpkbgf-uecxgpigt-jwpv-eqpvckpogpv-648[qsxvr]",
    "udglrdfwlyh-hjj-zrunvkrs-829[csnzf]",
    "vhkkhlbox-vtgwr-vhtmbgz-ftgtzxfxgm-657[sojpi]",
    "luxciuwncpy-vcibutulxiom-vumeyn-ijyluncihm-708[dtmyw]",
    "xst-wigvix-ikk-qevoixmrk-646[wuqfg]",
    "ide-htrgti-gpqqxi-gtrtxkxcv-947[lzybn]",
    "udglrdfwlyh-fdqgb-frdwlqj-vwrudjh-179[oqkrh]",
    "ipvohghykvbz-kfl-klzpnu-617[khlpv]",
    "oxaflxzqfsb-yxphbq-pxibp-653[afqdk]",
    "bkzrrhehdc-idkkxadzm-cdudknoldms-105[dkchm]",
    "zsxyfgqj-gfxpjy-hzxytrjw-xjwanhj-723[zstyw]",
    "kfg-jvtivk-treup-tfrkzex-ivrthlzjzkzfe-997[ktzef]",
    "zekvierkzferc-treup-tfrkzex-uvgcfpdvek-971[ekwcg]",
    "xgsvgmotm-igtje-iugzotm-xkykgxin-358[mzwst]",
    "jyfvnlupj-ihzrla-yljlpcpun-539[ljpnu]",
    "bkwzkqsxq-zbytomdsvo-lkcuod-domrxyvyqi-692[odkqy]",
    "pyknyegle-cee-qfgnngle-756[muevb]",
    "buzahisl-zjhclunly-obua-yljlpcpun-461[cfmdj]",
    "oxjmxdfkd-gbiivybxk-absbilmjbkq-731[uhjdc]",
    "uqtqbizg-ozilm-kzgwomvqk-jcvvg-ikycqaqbqwv-798[qvgik]",
    "ohmnuvfy-wbiwifuny-nluchcha-786[hnucf]",
    "sbnqbhjoh-dboez-bdrvjtjujpo-753[dpmzu]",
    "jyddc-glsgspexi-pskmwxmgw-100[aeylk]",
    "qvbmzvibqwvit-xzwrmkbqtm-jiasmb-ikycqaqbqwv-902[qbimv]",
    "htqtwkzq-idj-zxjw-yjxynsl-983[zvyre]",
    "xekdwvwnzkqo-ejpanjwpekjwh-ywjzu-oanreyao-914[wejak]",
    "sedikcuh-whqtu-sbqiiyvyut-isqludwuh-xkdj-skijecuh-iuhlysu-322[sktui]",
    "rkpqxyib-bdd-xkxivpfp-471[pxbdi]",
    "qxdwpopgsdjh-rpcsn-rdpixcv-jhtg-ithixcv-895[pcdhi]",
    "mbggf-yhiipa-klclsvwtlua-955[oelkb]",
    "eadalsjq-yjsvw-hjgbwuladw-bwddqtwsf-jwsuimakalagf-372[rpxet]",
    "hmsdqmzshnmzk-rbzudmfdq-gtms-cdoknxldms-859[ywtqf]",
    "bnqqnrhud-bzmcx-bnzshmf-qdbdhuhmf-625[smnwl]",
    "vagreangvbany-onfxrg-qrcyblzrag-195[szmkx]",
    "nij-mywlyn-wuhxs-mufym-916[sbczy]",
    "xst-wigvix-hci-asvowlst-958[istvw]",
    "lnkfaypeha-lhwopey-cnwoo-paydjkhkcu-680[lstyr]",
    "veqtekmrk-fewoix-gywxsqiv-wivzmgi-646[kvuxl]",
    "jvyyvzpcl-wshzapj-nyhzz-klzpnu-929[zpyhj]",
    "amlqskcp-epybc-djmucp-sqcp-rcqrgle-730[opija]",
    "sbqiiyvyut-isqludwuh-xkdj-cqhaujydw-998[yqrzk]",
    "kwzzwaqdm-rmttgjmiv-xczkpiaqvo-928[smyzo]",
    "zekvierkzferc-lejkrscv-gcrjkzt-xirjj-uvjzxe-321[svyma]",
    "pbybeshy-rtt-fuvccvat-949[izmnw]",
    "oxaflxzqfsb-zxkav-ixyloxqlov-133[mplun]",
    "apwmeclga-aylbw-amyrgle-pcqcypaf-600[bimqc]",
    "iqmbazulqp-nmewqf-mzmxkeue-144[oveiw]",
    "udglrdfwlyh-edvnhw-hqjlqhhulqj-985[cpsor]",
    "pinovwgz-zbb-gvwjmvojmt-655[dvsby]",
    "qfmcusbwq-rms-kcfygvcd-688[cfmqs]",
    "tbxmlkfwba-zxkav-zlxqfkd-jxohbqfkd-523[ljhnt]",
    "gsrwyqiv-kvehi-gsvvswmzi-wgezirkiv-lyrx-hitevxqirx-100[yfbno]",
    "etyyx-qzaahs-bnmszhmldms-599[msahy]",
    "mvhkvbdib-nxvqzibzm-cpio-mzvxlpdndodji-473[rtjeu]",
    "wlsiayhcw-vumeyn-ijyluncihm-994[yziwj]",
    "oaddaeuhq-dmpuamofuhq-qss-fqotzaxask-898[ycmns]",
    "ynukcajey-ywjzu-zalwnpiajp-108[vmosc]",
    "dzczkrip-xiruv-tyftfcrkv-uvgrikdvek-529[bdmtn]",
    "clxalrtyr-nlyoj-xlcvpetyr-379[wexcp]",
    "zlkprjbo-doxab-bdd-ixyloxqlov-419[nitur]",
    "uiovmbqk-rmttgjmiv-bmkpvwtwog-850[lsyvi]",
    "dfcxsqhwzs-pibbm-aofyshwbu-168[mtsnf]",
    "lhkhszqx-fqzcd-eknvdq-cdrhfm-287[dhqcf]",
    "cvabijtm-lgm-ivitgaqa-694[rpzkl]",
    "qzlozfhmf-rbzudmfdq-gtms-zbpthrhshnm-963[hmzfb]",
    "bxaxipgn-vgpst-qjccn-detgpixdch-921[cgpxd]",
    "krxqjijamxdb-kjbtnc-cajrwrwp-771[liezd]",
    "surmhfwloh-vfdyhqjhu-kxqw-rshudwlrqv-387[bzfdx]",
    "dlhwvupglk-ihzrla-dvyrzovw-643[lvdhr]",
    "dlhwvupglk-lnn-zopwwpun-435[lnpwu]",
    "sbnqbhjoh-sbccju-ufdiopmphz-519[bhcjo]",
    "oaxadrgx-otaoaxmfq-etubbuzs-820[aoxbt]",
    "encuukhkgf-lgnnadgcp-nqikuvkeu-648[jhcwv]",
    "ajyqqgdgcb-zyqicr-bcqgel-964[zyesc]",
    "kmjezxodgz-wvnfzo-xpnojhzm-nzmqdxz-681[wrjtn]",
    "fnjyxwrinm-kjbtnc-mnyjacvnwc-277[mjtln]",
    "ktfitzbgz-cxeeruxtg-nlxk-mxlmbgz-527[yiwvu]",
    "tbxmlkfwba-avb-pqloxdb-887[balxd]",
    "pbybeshy-fpniratre-uhag-ynobengbel-689[nqied]",
    "emixwvqhml-lgm-aitma-174[maile]",
    "ryexqpqhteki-rqiauj-husuylydw-686[pmutv]",
    "njmjubsz-hsbef-tdbwfohfs-ivou-fohjoffsjoh-337[fohjs]",
    "lnkfaypeha-ydkykhwpa-nayaerejc-394[mwhrf]",
    "pybgmyargtc-zsllw-qyjcq-964[ctgad]",
    "myvybpev-cmkfoxqob-rexd-ckvoc-198[ueqjn]",
    "votubcmf-ezf-sftfbsdi-285[nvymk]",
    "hwdtljsnh-gzssd-jslnsjjwnsl-671[pimqy]",
    "votubcmf-dipdpmbuf-mbcpsbupsz-441[lckdr]",
    "ide-htrgti-gpqqxi-rjhidbtg-htgkxrt-193[gynxm]",
    "yhwooebeaz-ydkykhwpa-opknwca-290[yqzkj]",
    "nbhofujd-tdbwfohfs-ivou-tbmft-493[tjgzf]",
    "xgsvgmotm-kmm-rumoyzoiy-358[vzysu]",
    "etaqigpke-fag-fgukip-154[gaefi]",
    "sbnqbhjoh-sbccju-tfswjdft-961[bjscf]",
    "hvbizodx-kgvnodx-bmvnn-adivixdib-629[pabrd]",
    "xfbqpojafe-qmbtujd-hsbtt-usbjojoh-103[bjotf]",
    "ohmnuvfy-wbiwifuny-wihnuchgyhn-422[fdwyt]",
    "wifilzof-vohhs-lymyulwb-448[iuvhx]",
    "owshgfarwv-hdsklau-yjskk-ogjckzgh-606[kghsa]",
    "sorozgxe-mxgjk-yigbktmkx-natz-zxgototm-800[gotxk]",
    "lejkrscv-tyftfcrkv-jvimztvj-399[tjimr]",
    "gsvvswmzi-nippcfier-wivzmgiw-932[zybmh]",
    "odiih-ljwmh-lxjcrwp-uxprbcrlb-979[lrbch]",
    "uzfqdzmfuazmx-vqxxknqmz-ruzmzouzs-404[oglmz]",
    "kyelcrga-bwc-qyjcq-366[mzens]",
    "foadouwbu-gqojsbusf-vibh-gsfjwqsg-688[yfqzi]",
    "kfg-jvtivk-gcrjkzt-xirjj-ivtvzmzex-581[jvikt]",
    "ckgvutofkj-igtje-giwaoyozout-332[cwijt]",
    "pbybeshy-pubpbyngr-erfrnepu-923[bpery]",
    "hcd-gsqfsh-dzoghwq-ufogg-gozsg-532[mqopr]",
    "wfummczcyx-wuhxs-wiuncha-yhachyylcha-188[hxcrd]",
    "ujqgywfau-tmffq-ljsafafy-112[bfytz]",
    "clxalrtyr-ojp-qtylyntyr-119[gijln]",
    "lmprfnmjc-mzhcar-qrmpyec-548[mcrpa]",
    "yhwooebeaz-oywrajcan-dqjp-ajcejaanejc-316[gbruk]",
    "wifilzof-xsy-yhachyylcha-604[hstyz]",
    "ziuxioqvo-ntwemz-tijwzibwzg-460[qjaft]",
    "qspkfdujmf-kfmmzcfbo-gjobodjoh-103[qcemb]",
    "sbqiiyvyut-tou-jusxdebewo-764[rwmyx]",
    "surmhfwloh-edvnhw-pdunhwlqj-699[retcb]",
    "mvkccspson-zvkcdsm-qbkcc-ecob-docdsxq-198[csdko]",
    "pbybeshy-wryylorna-pbagnvazrag-429[vnjmx]",
    "vdzonmhydc-bzmcx-trdq-sdrshmf-937[kigbu]",
    "qzoggwtwsr-pibbm-rsdzcmasbh-454[lnqsc]",
    "fodvvlilhg-gbh-dqdobvlv-153[vdlbg]",
    "iuruxlar-xgjougizobk-igtje-vaxingyotm-696[gioux]",
    "rmn-qcapcr-qaytclecp-fslr-qrmpyec-314[cztqy]",
    "nvrgfezqvu-srjbvk-crsfirkfip-373[rfvik]",
    "xtwtelcj-rclop-tyepcyletzylw-qwzhpc-opgpwzaxpye-717[mdzsw]",
    "sxdobxkdsyxkv-lexxi-dbksxsxq-744[wzmfo]",
    "bnqqnrhud-cxd-otqbgzrhmf-911[zqmyx]",
    "kmjezxodgz-xjinphzm-bmvyz-ytz-gvwjmvojmt-343[mzjvg]",
    "hplazytkpo-mldvpe-pyrtyppctyr-951[pgoxs]",
    "dzczkrip-xiruv-treup-ljvi-kvjkzex-867[newix]",
    "gsrwyqiv-kvehi-gerhc-vieguymwmxmsr-516[egimr]",
    "rgllk-otaoaxmfq-ymdwqfuzs-924[aflmo]",
    "pualyuhapvuhs-kfl-wbyjohzpun-461[uhpal]",
    "vagreangvbany-cebwrpgvyr-pnaql-erfrnepu-481[hmnwj]",
    "wsvsdkbi-qbkno-oqq-domrxyvyqi-354[xyfjg]",
    "ykjoqian-cnwza-xwogap-odellejc-992[utznj]",
    "bkwzkqsxq-oqq-ecob-docdsxq-718[vhbka]",
    "yaxsnlcrun-kjbtnc-fxatbqxy-745[ysrtb]",
    "uwtojhynqj-rflsjynh-uqfxynh-lwfxx-tujwfyntsx-307[vulsb]",
    "dmybmsuzs-otaoaxmfq-eqdhuoqe-950[zhwyv]",
    "gokzyxsjon-tovvilokx-nocsqx-978[oxkns]",
    "oazegyqd-sdmpq-rgllk-otaoaxmfq-pqeusz-976[qaode]",
    "pejji-bkllsd-vyqscdsmc-614[scdjl]",
    "nwzekwypera-ywjzu-zarahkliajp-758[bahgf]",
    "zuv-ykixkz-laffe-yigbktmkx-natz-jkvruesktz-774[trdse]",
    "pelbtravp-cynfgvp-tenff-npdhvfvgvba-845[lgrst]",
    "zlkprjbo-doxab-avb-obpbxoze-549[cobza]",
    "ujqgywfau-aflwjfslagfsd-bwddqtwsf-ljsafafy-424[wcozk]",
    "rdchjbtg-vgpst-hrpktcvtg-wjci-gthtpgrw-193[jsqvi]",
    "ixeumktoi-vrgyzoi-mxgyy-ygrky-514[grzvh]",
    "wkqxodsm-nio-bomosfsxq-588[osmqx]",
    "pbybeshy-onfxrg-fgbentr-715[ahftx]",
    "pdjqhwlf-fdqgb-dftxlvlwlrq-829[lbrgj]",
    "ejpanjwpekjwh-nwxxep-ykjpwejiajp-602[mtcnj]",
    "npmhcargjc-cee-rcaflmjmew-860[cemaj]",
    "zuv-ykixkz-lruckx-ygrky-748[kyrux]",
    "myvybpev-lexxi-bomosfsxq-822[xbemo]",
    "ipvohghykvbz-qlssfilhu-aljouvsvnf-591[frsvt]",
    "hqtyeqsjylu-fbqijys-whqii-huqsgkyiyjyed-660[stpzn]",
    "irgyyolokj-inuiurgzk-rghuxgzuxe-124[guirk]",
    "xmrrq-ugjjgkanw-wyy-umklgewj-kwjnauw-736[wjgku]",
    "fydelmwp-clmmte-xlylrpxpye-847[lempy]",
    "tfiifjzmv-avccpsvre-dribvkzex-685[tvxrq]",
    "iqmbazulqp-qss-pqbxakyqzf-508[yxnth]",
    "iuruxlar-houngfgxjuay-igtje-iugzotm-ktmotkkxotm-618[dtvzi]",
    "lhkhszqx-fqzcd-bzmcx-rsnqzfd-495[wtxeb]",
    "sebehvkb-sqdto-cqdqwucudj-348[dqbce]",
    "hdgdovmt-bmvyz-agjrzm-xpnojhzm-nzmqdxz-343[tsxdr]",
    "tfcfiwlc-irsszk-wzeretzex-477[thmsr]",
    "awzwhofm-ufors-qobrm-cdsfohwcbg-168[tofxm]",
    "gpewwmjmih-hci-eguymwmxmsr-958[mjnya]",
    "clxalrtyr-clotzlnetgp-awldetn-rcldd-opdtry-171[hynzs]",
    "rgllk-otaoaxmfq-ruzmzouzs-118[ozalm]",
    "zgmfyxypbmsq-djmucp-qyjcq-574[hbayt]",
    "shoewudys-sqdto-seqjydw-tuiywd-608[kdalb]",
    "gokzyxsjon-mkxni-vyqscdsmc-432[sckmn]",
    "enzcntvat-pnaql-grpuabybtl-585[antbl]",
    "sehheiylu-isqludwuh-xkdj-jusxdebewo-400[pjhum]",
    "kmjezxodgz-ezggtwzvi-jkzmvodjin-369[zgjde]",
    "xcitgcpixdcpa-qjccn-detgpixdch-739[aohtz]",
    "ksodcbwnsr-tzcksf-fsqswjwbu-714[swbcf]",
    "lxaaxbren-kjbtnc-jlzdrbrcrxw-225[nwkot]",
    "mvydjvxodqz-nxvqzibzm-cpio-hvmfzodib-733[vzdim]",
    "sbejpbdujwf-dboez-dvtupnfs-tfswjdf-363[youlh]",
    "mtzslklcozfd-mldvpe-cpdplcns-275[lzyck]",
    "nvrgfezqvu-sleep-kirzezex-607[bwxna]",
    "qekrixmg-gerhc-xiglrspskc-204[dcozr]",
    "ktwbhtvmbox-vtgwr-vhtmbgz-wxiehrfxgm-449[tbghm]",
    "etaqigpke-ecpfa-tgegkxkpi-674[bopve]",
    "kwtwznct-jiasmb-ikycqaqbqwv-252[qwabc]",
    "oxaflxzqfsb-yxphbq-ildfpqfzp-939[endsq]",
    "qcffcgwjs-suu-gvwddwbu-272[byfto]",
    "lhkhszqx-fqzcd-cxd-lzmzfdldms-391[dzlcf]",
    "iutyaskx-mxgjk-lruckx-uvkxgzouty-254[uvfmo]",
    "nzwzcqfw-mldvpe-zapcletzyd-483[aznms]",
    "luxciuwncpy-wbiwifuny-ijyluncihm-396[xuqsy]",
    "rgndvtcxr-hrpktcvtg-wjci-sthxvc-401[krmqs]",
    "tyepcyletzylw-nlyoj-nzletyr-ecltytyr-457[zrxqh]",
    "zsxyfgqj-rnqnyfwd-lwfij-kqtbjw-uzwhmfxnsl-307[fwjnq]",
    "qjopwxha-oywrajcan-dqjp-oanreyao-862[zwomt]",
    "pwcvonofrcig-dzoghwq-ufogg-hfowbwbu-844[ogwfb]",
    "bgmxkgtmbhgte-ietlmbv-zktll-vhgmtbgfxgm-787[gmtbl]",
    "eza-dpncpe-mldvpe-cpdplcns-405[uobym]",
    "qmpmxevc-kvehi-gerhc-gsexmrk-gywxsqiv-wivzmgi-464[dafcm]",
    "joufsobujpobm-dpssptjwf-kfmmzcfbo-tbmft-961[fbmoj]",
    "foadouwbu-xszzmpsob-rsgwub-324[ubxcr]",
    "ucynmlgxcb-aylbw-qfgnngle-210[tfzcn]",
    "sorozgxe-mxgjk-lruckx-uvkxgzouty-254[mnvbw]",
    "vxupkizork-kmm-jkyomt-384[kmoij]",
    "mhi-lxvkxm-vtgwr-phkdlahi-761[hiklm]",
    "ixccb-fkrfrodwh-ghyhorsphqw-335[hrcfo]",
    "hcd-gsqfsh-dzoghwq-ufogg-rsjszcdasbh-168[rfxyw]",
    "tbxmlkfwba-zxkav-pbosfzbp-965[ipmzy]",
    "xcitgcpixdcpa-qxdwpopgsdjh-uadltg-uxcpcrxcv-167[bjvrp]",
    "etyyx-cxd-kzanqzsnqx-573[bmaui]",
    "cybyjqho-whqtu-hqrryj-efuhqjyedi-530[czdbf]",
    "votubcmf-kfmmzcfbo-efqbsunfou-597[fbmou]",
    "awzwhofm-ufors-tzcksf-sbuwbssfwbu-272[rsubo]",
    "kwzzwaqdm-kivlg-kwibqvo-amzdqkma-356[inmyj]",
    "ixccb-fdqgb-zrunvkrs-569[etxgi]",
    "rdchjbtg-vgpst-egdytrixat-qjccn-rdcipxcbtci-713[duwnc]",
    "mbiyqoxsm-tovvilokx-psxkxmsxq-978[xmosi]",
    "xgvnndadzy-xviyt-rjmfncjk-707[josem]",
    "aczupnetwp-awldetn-rcldd-nfdezxpc-dpcgtnp-873[svdjf]",
    "ahngzyzqcntr-bzmcx-sdbgmnknfx-859[nzbcg]",
    "sorozgxe-mxgjk-igtje-jkvgxzsktz-696[gjkxz]",
    "rgllk-dmybmsuzs-omzpk-oamfuzs-pqhqxabyqzf-456[alknr]",
    "aflwjfslagfsd-xdgowj-hmjuzskafy-528[fajsd]",
    "htwwtxnaj-hmthtqfyj-htsyfnsrjsy-879[hnldm]",
    "gokzyxsjon-lexxi-nozvyiwoxd-640[fziuy]",
    "pbeebfvir-cynfgvp-tenff-genvavat-819[efvna]",
    "pybgmyargtc-djmucp-bcqgel-184[rfmta]",
    "myvybpev-mbiyqoxsm-oqq-dbksxsxq-926[tbqzr]",
    "xmtjbzidx-xviyt-yzqzgjkhzio-499[sptmq]",
    "iruzfrtkzmv-irsszk-ivtvzmzex-659[zirvk]",
    "xst-wigvix-nippcfier-erepcwmw-126[iepwc]",
    "amlqskcp-epybc-aylbw-amyrgle-pcacgtgle-730[mpskn]",
    "pybgmyargtc-qaytclecp-fslr-jyzmpyrmpw-756[syuvq]",
    "kwzzwaqdm-kivlg-kwibqvo-tijwzibwzg-746[zrpnw]",
    "frqvxphu-judgh-hjj-vklsslqj-543[myczb]",
    "tcorcikpi-tcfkqcevkxg-rncuvke-itcuu-rwtejcukpi-154[jyoui]",
    "mybbycsfo-excdklvo-zvkcdsm-qbkcc-nocsqx-744[rpzts]",
    "emixwvqhml-xtiabqk-oziaa-nqvivkqvo-850[voxnr]",
    "wlqqp-avccpsvre-jrcvj-945[cvjpq]",
    "rgndvtcxr-qphzti-itrwcdadvn-713[drtci]",
    "zhdsrqlchg-sodvwlf-judvv-fxvwrphu-vhuylfh-335[sgotp]",
    "jchipqat-uadltg-tcvxcttgxcv-219[lquds]",
    "gntmfefwitzx-hfsid-rfwpjynsl-931[ubayg]",
    "apwmeclga-njyqrga-epyqq-nspafyqgle-964[aqegp]",
    "xgjougizobk-hatte-xkykgxin-592[hczyv]",
    "zgmfyxypbmsq-afmamjyrc-nspafyqgle-106[nltfa]",
    "jshzzpmplk-ihzrla-jbzavtly-zlycpjl-721[kzovn]",
    "apwmeclga-hcjjwzcyl-rpyglgle-496[lvmqk]",
    "kwtwznct-akidmvomz-pcvb-mvoqvmmzqvo-746[hgszx]",
    "surmhfwloh-exqqb-dftxlvlwlrq-621[lqfhr]",
    "dfcxsqhwzs-rms-sbuwbssfwbu-844[qcrnm]",
    "ytu-xjhwjy-wfggny-jslnsjjwnsl-541[jnswy]",
    "zovldbkfz-gbiivybxk-obzbfsfkd-809[bfkzd]",
    "lxwbdvna-pajmn-ajkkrc-anlnrerwp-147[amynk]",
    "xjgjmapg-agjrzm-hvivbzhzio-811[tjpax]",
    "willimcpy-xsy-lymyulwb-318[ytesn]",
    "ckgvutofkj-lruckx-vaxingyotm-228[efntu]",
    "zloolpfsb-avb-cfkxkzfkd-159[iyjts]",
    "vhglnfxk-zktwx-ubhatstkwhnl-ietlmbv-zktll-kxvxbobgz-293[kltbx]",
    "gokzyxsjon-mkxni-cdybkqo-952[tynps]",
    "kfg-jvtivk-sleep-jyzggzex-373[egjkv]",
    "hwdtljsnh-xhfajsljw-mzsy-wjxjfwhm-827[vuaex]",
    "qxdwpopgsdjh-eaphixr-vgphh-jhtg-ithixcv-427[hpgix]",
    "cebwrpgvyr-pubpbyngr-qrcyblzrag-299[ecfbk]",
    "bwx-amkzmb-kivlg-lmxizbumvb-148[wjmyo]",
    "bdavqofuxq-vqxxknqmz-fdmuzuzs-326[ezmtq]",
    "laffe-hatte-ktmotkkxotm-410[ymcnz]",
    "fkqbokxqflkxi-avb-zrpqljbo-pbosfzb-497[bfkoq]",
    "ynssr-vetllbybxw-yehpxk-ftgtzxfxgm-241[xtybe]",
    "dsxxw-djmucp-kypicrgle-444[gvxac]",
    "dfcxsqhwzs-forwcoqhwjs-gqojsbusf-vibh-fsqswjwbu-220[ytwiz]",
    "wfintfhynaj-xhfajsljw-mzsy-hzxytrjw-xjwanhj-307[tkzub]",
    "ajvyjprwp-bljenwpna-qdwc-anbnjalq-459[sqrzn]",
    "pyknyegle-dsxxw-bwc-kypicrgle-340[vgwsd]",
    "dwbcjkun-mhn-ldbcxvna-bnaerln-485[vgsei]",
    "wsvsdkbi-qbkno-pvygob-kxkvicsc-458[mynov]",
    "qfkkj-upwwjmply-zapcletzyd-613[noqls]",
    "bqxnfdmhb-qzaahs-zmzkxrhr-989[wzhlt]",
    "apwmeclga-afmamjyrc-dglylagle-860[algmc]",
    "jyfvnlupj-msvdly-klwhyatlua-175[lyaju]",
    "wlsiayhcw-dyffsvyuh-fuvilunils-422[iuzke]",
    "fydelmwp-awldetn-rcldd-xlylrpxpye-873[rdnsj]",
    "bkzrrhehdc-azrjds-ehmzmbhmf-287[hmrzb]",
    "mvkccspson-bkllsd-dbksxsxq-926[skbcd]",
    "qfmcusbwq-foppwh-rsdzcmasbh-870[sbcfh]",
    "vrurcjah-pajmn-npp-fxatbqxy-381[apjnr]",
    "vjpwncrl-yaxsnlcrun-kdwwh-uxprbcrlb-485[gylan]",
    "lgh-kwujwl-tskcwl-ugflsafewfl-788[lwfgk]",
    "avw-zljyla-jyfvnlupj-qlssfilhu-aljouvsvnf-409[ljvaf]",
    "lejkrscv-jtrmvexvi-ylek-fgvirkzfej-763[evjkr]",
    "cxy-bnlanc-kdwwh-lxwcjrwvnwc-277[umehn]",
    "eza-dpncpe-clmmte-cplnbftdtetzy-145[ysezq]",
    "pinovwgz-kgvnodx-bmvnn-vxlpdndodji-603[encyh]",
    "gifavtkzcv-sleep-cfxzjkztj-919[vdzmb]",
    "lnkfaypeha-ywjzu-ykwpejc-zaoecj-212[huvex]",
    "oqnidbshkd-cxd-qdrdzqbg-573[kvsnt]",
    "hcd-gsqfsh-foppwh-hfowbwbu-402[cldzy]",
    "qvbmzvibqwvit-xtiabqk-oziaa-apqxxqvo-590[wbigl]",
    "myxcewob-qbkno-zvkcdsm-qbkcc-nofovyzwoxd-198[vqfcu]",
    "vehmsegxmzi-hci-xiglrspskc-542[isceg]",
    "xekdwvwnzkqo-bhksan-wymqeoepekj-602[eynfr]",
    "ujqgywfau-xdgowj-wfyafwwjafy-866[wfajy]",
    "lxaaxbren-ajkkrc-ldbcxvna-bnaerln-303[anblr]",
    "dpotvnfs-hsbef-kfmmzcfbo-dvtupnfs-tfswjdf-259[ufyek]",
    "zhdsrqlchg-sodvwlf-judvv-uhfhlylqj-959[zjoag]",
    "rdggdhxkt-uadltg-hwxeexcv-557[xigef]",
    "nwzekwypera-acc-klanwpekjo-368[aekwc]",
    "ymszqfuo-otaoaxmfq-mocgueufuaz-248[xgnem]",
    "yaxsnlcrun-ljwmh-jwjuhbrb-459[ebkum]",
    "oxaflxzqfsb-yflexwxoalrp-mixpqfz-doxpp-pxibp-107[ilnsk]",
    "oaddaeuhq-pkq-ymdwqfuzs-638[yuczs]",
    "pynffvsvrq-pnaql-pbngvat-qrirybczrag-845[ranpq]",
    "tpspahyf-nyhkl-wshzapj-nyhzz-mpuhujpun-721[hpnuy]",
    "kyelcrga-hcjjwzcyl-qrmpyec-392[cyejl]",
    "lqwhuqdwlrqdo-exqqb-ghsorbphqw-491[uopyz]",
    "rdadguja-eaphixr-vgphh-pcpanhxh-141[qmfpg]",
    "yhtwhnpun-qlssfilhu-svnpzapjz-149[hnpsl]",
    "xtwtelcj-rclop-nlyoj-qtylyntyr-249[ltycj]",
    "rgndvtcxr-rpcsn-rdpixcv-ejgrwphxcv-193[kulpr]",
    "qmpmxevc-kvehi-ikk-pefsvexsvc-542[aitns]",
    "otzkxtgzoutgr-lruckx-xkgiwaoyozout-150[mdfyq]",
    "zotts-luvvcn-lyuwkocmcncih-942[gjymz]",
    "vqr-ugetgv-dwppa-fgrnqaogpv-544[tromz]",
    "cjpibabsepvt-sbccju-nbslfujoh-545[mwkqj]",
    "aczupnetwp-clmmte-xlcvpetyr-223[pmoqy]",
    "rdadguja-ytaanqtpc-prfjxhxixdc-245[adxcj]",
    "ucynmlgxcb-aylbw-amyrgle-bctcjmnkclr-236[uazni]",
    "shmml-pnaql-pbngvat-grpuabybtl-585[jivfg]",
    "dzczkrip-xiruv-irsszk-glityrjzex-867[nzayl]",
    "pbafhzre-tenqr-fpniratre-uhag-pbagnvazrag-377[twsqp]",
    "tinnm-dzoghwq-ufogg-cdsfohwcbg-636[fpxjq]",
    "ixeumktoi-igtje-iugzotm-rumoyzoiy-904[trlzu]",
    "pelbtravp-pnaql-pbngvat-freivprf-949[parvb]",
    "gsrwyqiv-kvehi-nippcfier-tyvglewmrk-386[fctsn]",
    "hqcfqwydw-vbemuh-jusxdebewo-400[xzfmv]",
    "cjpibabsepvt-sbccju-efqmpznfou-935[rzenu]",
    "fnjyxwrinm-npp-cajrwrwp-979[nprwj]",
    "vetllbybxw-unggr-ehzblmbvl-501[fvmoa]",
    "ugfkmewj-yjsvw-wyy-ghwjslagfk-710[vmcub]",
    "etyyx-qzaahs-btrsnldq-rdquhbd-183[gfzym]",
    "kzgwomvqk-lgm-camz-bmabqvo-902[nfmek]",
    "xcitgcpixdcpa-hrpktcvtg-wjci-ejgrwphxcv-869[cpgit]",
    "pbybeshy-pnaql-pbngvat-ernpdhvfvgvba-351[bpvan]",
    "jxdkbqfz-zxkav-zlxqfkd-xkxivpfp-991[npdis]",
    "raphhxuxts-qphzti-hwxeexcv-167[hxept]",
    "oknkvcta-itcfg-tcorcikpi-fag-tgceswkukvkqp-362[qvgoc]",
    "amlqskcp-epybc-glrcplyrgmlyj-zsllw-cleglccpgle-158[atcbx]",
    "apwmeclga-aylbw-amyrgle-bcnjmwkclr-912[tnskp]",
    "xjmmjndqz-zbb-vxlpdndodji-369[wfyzh]",
    "shoewudys-rkddo-cqhaujydw-842[dhosu]",
    "zovldbkfz-ciltbo-qoxfkfkd-289[ykmgw]",
    "willimcpy-jfumncw-alumm-omyl-nymncha-396[isnbe]",
    "vjpwncrl-lqxlxujcn-jwjuhbrb-303[epojm]",
    "gzefmnxq-omzpk-pqbxakyqzf-352[zpnyf]",
    "ytu-xjhwjy-kqtbjw-hzxytrjw-xjwanhj-281[zxolt]",
    "esyfwlau-vqw-dstgjslgjq-788[xwpyu]",
    "kyelcrga-pyzzgr-qfgnngle-834[rcqns]",
    "ovbunmneqbhf-pubpbyngr-znexrgvat-533[vdezh]",
    "veqtekmrk-fewoix-gsrxemrqirx-100[erxik]",
    "hjgbwuladw-hdsklau-yjskk-esjcwlafy-216[ajkls]",
    "pinovwgz-kmjezxodgz-zbb-vivgtndn-993[svekp]",
    "xlrypetn-awldetn-rcldd-fdpc-epdetyr-301[delpr]",
    "ajmrxjlcren-ljwmh-jlzdrbrcrxw-719[juazc]",
    "ymszqfuo-omzpk-oamfuzs-ruzmzouzs-456[caspz]",
    "gspsvjyp-tpewxmg-kveww-wepiw-776[zglbt]",
    "eqnqthwn-ecpfa-fgrnqaogpv-440[mnlrz]",
    "rflsjynh-hfsid-htfynsl-rfwpjynsl-489[ghblf]",
    "pkl-oaynap-bhksan-nawymqeoepekj-368[aeknp]",
    "hwdtljsnh-wfggny-wjxjfwhm-229[whjfg]",
    "lqwhuqdwlrqdo-exqqb-xvhu-whvwlqj-725[rhaqf]",
    "jyddc-nippcfier-erepcwmw-178[sticn]",
    "eadalsjq-yjsvw-wyy-mkwj-lwklafy-736[yzjgq]",
    "xst-wigvix-veffmx-jmrergmrk-646[nuewy]",
    "elrkdcdugrxv-gbh-frqwdlqphqw-179[zshyg]",
    "rdadguja-hrpktcvtg-wjci-jhtg-ithixcv-765[tcghi]",
    "lejkrscv-zekvierkzferc-irsszk-rercpjzj-399[rekzc]",
    "kmjezxodgz-nxvqzibzm-cpio-pnzm-oznodib-837[zoimn]",
    "clotzlnetgp-clmmte-hzcvdsza-457[yxtba]",
    "aoubshwq-gqojsbusf-vibh-hfowbwbu-428[bhosu]",
    "bdavqofuxq-dmnnuf-eqdhuoqe-144[conrz]",
    "xfbqpojafe-qmbtujd-hsbtt-pqfsbujpot-259[snmtz]",
    "dlhwvupglk-msvdly-svnpzapjz-539[lpvds]",
    "clotzlnetgp-dnlgpyrpc-sfye-opalcexpye-171[ykocp]",
    "pejji-pvygob-bokmaescsdsyx-406[wmqnk]",
    "lejkrscv-avccpsvre-glityrjzex-789[cervj]",
    "enqvbnpgvir-wryylorna-erfrnepu-403[sdygr]",
    "hplazytkpo-mldvpe-opawzjxpye-977[qtzrk]",
    "sbejpbdujwf-dboez-tupsbhf-493[bdefj]",
    "gsrwyqiv-kvehi-yrwxefpi-fewoix-vigimzmrk-672[sytnz]",
    "jef-iushuj-zubboruqd-iqbui-946[kcysl]",
    "surmhfwloh-hjj-dftxlvlwlrq-595[lhfjr]",
    "zloolpfsb-oxyyfq-abmxoqjbkq-835[ynzmp]",
    "zotts-mwupyhayl-bohn-xymcah-786[iyhxu]",
    "zhdsrqlchg-mhoobehdq-fxvwrphu-vhuylfh-257[cxogf]",
    "ktwbhtvmbox-ktuubm-tvjnblbmbhg-943[flrzj]",
    "qzoggwtwsr-dfcxsqhwzs-rms-rsgwub-662[tehuv]",
    "tfejldvi-xiruv-szfyrqriuflj-upv-wzeretzex-555[rpocq]",
    "qzoggwtwsr-foppwh-twbobqwbu-844[wbogp]",
    "molgbzqfib-avb-qoxfkfkd-289[tkrcd]",
    "hqfxxnknji-uqfxynh-lwfxx-fhvznxnynts-177[fdlkw]",
    "sno-rdbqds-dff-cdrhfm-287[dfrsb]",
    "dkqjcbctfqwu-gii-wugt-vguvkpi-674[sjkzr]",
    "wihmogyl-aluxy-wuhxs-mbcjjcha-968[eufrc]",
    "vetllbybxw-wrx-vnlmhfxk-lxkobvx-969[ylumi]",
    "rkpqxyib-avb-absbilmjbkq-835[wnjuy]",
    "iuruxlar-igtje-sgxqkzotm-930[girtu]",
    "slqryzjc-kyelcrga-bwc-dglylagle-496[lcgya]",
    "fodvvlilhg-exqqb-xvhu-whvwlqj-673[vhlqw]",
    "yknnkoera-fahhuxawj-nawymqeoepekj-628[sfgvu]",
    "fhezusjybu-sqdto-jusxdebewo-166[vmzhw]",
    "dlhwvupglk-qlssfilhu-klclsvwtlua-591[lsuhk]",
    "oaxadrgx-eomhqzsqd-tgzf-pqbxakyqzf-716[nrgqs]",
    "jfifqxov-doxab-oxjmxdfkd-oxyyfq-cfkxkzfkd-887[gbrxt]",
    "dzczkrip-xiruv-tyftfcrkv-jrcvj-841[zcxdu]",
    "ajmrxjlcren-snuuhknjw-mnyuxhvnwc-537[rjiwk]",
    "kgjgrypw-epybc-njyqrga-epyqq-cleglccpgle-548[ykprd]",
    "qjopwxha-xwogap-opknwca-264[nrlsc]",
    "ejpanjwpekjwh-xwogap-odellejc-550[hndsm]",
    "ziuxioqvo-kivlg-kwibqvo-camz-bmabqvo-616[iovbq]",
    "kfg-jvtivk-szfyrqriuflj-upv-ivjvrity-607[drsmt]",
    "diozmivodjivg-ezggtwzvi-yzkvmohzio-421[nyzbw]",
    "gvcskirmg-hci-erepcwmw-464[kbwmq]",
    "nchhg-kivlg-kwibqvo-mvoqvmmzqvo-460[vmoqg]",
    "aoubshwq-rms-cdsfohwcbg-714[atihz]",
    "ajvyjprwp-lqxlxujcn-cajrwrwp-901[ghfuv]",
    "oqnidbshkd-rbzudmfdq-gtms-rghoohmf-339[mrkzl]",
    "muqfedyput-hqrryj-iuhlysui-504[uyhiq]",
    "kgjgrypw-epybc-djmucp-pcacgtgle-990[cgpej]",
    "vcibutulxiom-wbiwifuny-yhachyylcha-682[uigky]",
    "cebwrpgvyr-sybjre-freivprf-611[rebfp]",
    "wlsiayhcw-dyffsvyuh-lyuwkocmcncih-994[cyhwf]",
    "ncjzrpytn-fydelmwp-nsznzwlep-opalcexpye-795[penly]",
    "wkqxodsm-cmkfoxqob-rexd-domrxyvyqi-692[qbnjg]",
    "fmsledevhsyw-veffmx-viwievgl-490[utkwb]",
    "kwzzwaqdm-lgm-ewzsapwx-200[wzamd]",
    "foadouwbu-dzoghwq-ufogg-igsf-hsghwbu-506[tcdak]",
    "rgndvtcxr-rpcsn-itrwcdadvn-297[cnzup]",
    "bxaxipgn-vgpst-qjccn-prfjxhxixdc-115[qbscm]",
    "vehmsegxmzi-tpewxmg-kveww-eguymwmxmsr-152[tucsj]",
    "nbhofujd-sbejpbdujwf-qmbtujd-hsbtt-nbslfujoh-337[satqk]",
    "bnknqetk-dff-zbpthrhshnm-989[hpvak]",
    "hplazytkpo-nsznzwlep-opawzjxpye-431[nmfdl]",
    "xjgjmapg-xviyt-xjvodib-ncdkkdib-473[hgbua]",
    "nglmtuex-vtgwr-ltexl-137[tjwsv]",
    "qmpmxevc-kvehi-ikk-gsrxemrqirx-750[ojirk]",
    "iuxxuyobk-vrgyzoi-mxgyy-jkbkruvsktz-878[vdepk]",
    "tcorcikpi-wpuvcdng-lgnnadgcp-gpikpggtkpi-362[hiaqt]",
    "sedikcuh-whqtu-fbqijys-whqii-qdqboiyi-114[mhlay]",
    "wdjcvuvmyjpn-agjrzm-mznzvmxc-603[njtzy]",
    "dwbcjkun-snuuhknjw-mnbrpw-771[nuwbj]",
    "qjopwxha-zua-nawymqeoepekj-264[aejop]",
    "nvrgfezqvu-srjbvk-ljvi-kvjkzex-815[vjker]",
    "wpuvcdng-rncuvke-itcuu-fgrnqaogpv-284[ucgnv]",
    "nchhg-jiasmb-uizsmbqvo-408[jnagu]",
    "kpvgtpcvkqpcn-gii-ewuvqogt-ugtxkeg-986[gkptv]",
    "ykjoqian-cnwza-ywjzu-hkceopeyo-576[eqdiy]",
    "excdklvo-nio-wkbuodsxq-692[odkxb]",
    "wdjcvuvmyjpn-wvnfzo-vivgtndn-681[sokpb]",
    "bkzrrhehdc-dff-rsnqzfd-755[dfrhz]",
    "rdggdhxkt-hrpktcvtg-wjci-gtprfjxhxixdc-713[gtxcd]",
    "jvsvymbs-ibuuf-zopwwpun-721[meksh]",
    "ajyqqgdgcb-pybgmyargtc-cee-mncpyrgmlq-366[gcymq]",
    "elrkdcdugrxv-gbh-wudlqlqj-179[dlgqr]",
    "ide-htrgti-qphzti-hidgpvt-765[ithdg]",
    "excdklvo-cmkfoxqob-rexd-cdybkqo-146[oqmuv]",
    "qzchnzbshud-okzrshb-fqzrr-zmzkxrhr-495[nxcry]",
    "wrs-vhfuhw-fdqgb-frdwlqj-vklsslqj-621[flqsw]",
    "kfg-jvtivk-avccpsvre-ljvi-kvjkzex-659[vkjce]",
    "wkqxodsm-nio-psxkxmsxq-328[xskmo]",
    "ktwbhtvmbox-ietlmbv-zktll-nlxk-mxlmbgz-475[lbmtk]",
    "tpspahyf-nyhkl-kfl-dvyrzovw-461[yfhkl]",
    "ejpanjwpekjwh-bhksan-wjwhuoeo-862[jweha]",
    "dsxxw-djmucp-ylyjwqgq-600[djqwx]",
    "pybgmyargtc-afmamjyrc-rcaflmjmew-262[uxngz]",
    "xekdwvwnzkqo-xwogap-yqopkian-oanreya-758[zsntm]",
    "bjfutsneji-hfsid-htfynsl-tujwfyntsx-567[fstjn]",
    "ugdgjxmd-tskcwl-mkwj-lwklafy-424[euphz]",
    "lnkfaypeha-ydkykhwpa-wymqeoepekj-758[zmvns]",
    "wbhsfbohwcboz-gqojsbusf-vibh-rsgwub-506[nryqk]",
    "bnknqetk-dff-btrsnldq-rdquhbd-885[rxizw]",
    "rwcnawjcrxwju-ljwmh-ldbcxvna-bnaerln-277[nwacj]",
    "wbhsfbohwcboz-xszzmpsob-fsqswjwbu-844[jmrta]",
    "xtwtelcj-rclop-upwwjmply-dstaatyr-509[kfcln]",
    "hqfxxnknji-gzssd-htsyfnsrjsy-515[snfhj]",
    "xcitgcpixdcpa-uadltg-detgpixdch-713[tuqak]",
    "bwx-amkzmb-jiasmb-lmxtwgumvb-850[mbawx]",
    "aoubshwq-gqojsbusf-vibh-rsgwub-948[bsugh]",
    "pbybeshy-sybjre-freivprf-715[slnmt]",
    "oxmeeuruqp-otaoaxmfq-dqmocgueufuaz-326[oqsex]",
    "zsxyfgqj-gzssd-btwpxmtu-541[tbeoi]",
    "tfiifjzmv-avccpsvre-rercpjzj-841[megtl]",
    "ltpedcxots-gpqqxi-prfjxhxixdc-635[dljex]",
    "hcd-gsqfsh-suu-gozsg-974[xzhjm]",
    "raphhxuxts-ytaanqtpc-gtrtxkxcv-453[mkcvd]",
    "bkzrrhehdc-bzmcx-lzqjdshmf-313[pzucm]",
    "lhkhszqx-fqzcd-qzaahs-ehmzmbhmf-469[wtdih]",
    "tmrszakd-idkkxadzm-ehmzmbhmf-651[dmzvn]",
    "amppmqgtc-bwc-cleglccpgle-392[cglpe]",
    "yrwxefpi-glsgspexi-eguymwmxmsr-308[egmsx]",
    "jfifqxov-doxab-gbiivybxk-tlohpelm-575[mwlps]",
    "dpssptjwf-qmbtujd-hsbtt-nbslfujoh-181[tlorv]",
    "ftzgxmbv-ietlmbv-zktll-kxtvjnblbmbhg-995[pqmrn]",
    "lxaaxbren-kjbtnc-mnyuxhvnwc-875[sgucv]",
    "ygcrqpkbgf-uecxgpigt-jwpv-fgxgnqrogpv-544[gpcfq]",
    "kwtwznct-lgm-nqvivkqvo-174[qsnxm]",
    "jvuzbtly-nyhkl-jhukf-jbzavtly-zlycpjl-773[ljyzb]",
    "aoubshwq-rms-rsdzcmasbh-766[zqtpb]",
    "jsehsyafy-jsttal-jwsuimakalagf-190[dzuca]",
    "mtzslklcozfd-nlyoj-opawzjxpye-821[lozjp]",
    "eqnqthwn-ecpfa-fgukip-726[oydrm]",
    "bkwzkqsxq-zvkcdsm-qbkcc-domrxyvyqi-848[xycdz]",
    "ugjjgkanw-wyy-dgyaklauk-242[yzsdv]",
    "ugfkmewj-yjsvw-hdsklau-yjskk-vwhsjlewfl-918[badep]",
    "etaqigpke-uecxgpigt-jwpv-fgxgnqrogpv-726[gpeiq]",
    "mvkccspson-mkxni-mykdsxq-wkxkqowoxd-536[cgqjw]",
    "lxwbdvna-pajmn-npp-nwprwnnarwp-563[voqpy]",
    "aflwjfslagfsd-hdsklau-yjskk-vwhdgqewfl-398[madni]",
    "eqttqukxg-ejqeqncvg-yqtmujqr-414[spjrg]",
    "laffe-vrgyzoi-mxgyy-jkyomt-956[tmyzs]",
    "ajyqqgdgcb-hcjjwzcyl-pcqcypaf-834[pmnar]",
    "jrncbavmrq-fpniratre-uhag-qrcyblzrag-247[iynma]",
    "lahxpnwrl-snuuhknjw-nwprwnnarwp-849[mtzsn]",
    "dzczkrip-xiruv-treup-tfrkzex-crsfirkfip-139[szduj]",
    "oazegyqd-sdmpq-oxmeeuruqp-nmewqf-iadwetab-378[zyrxh]",
    "ubhatstkwhnl-ietlmbv-zktll-vnlmhfxk-lxkobvx-553[mnfye]",
    "xfbqpojafe-kfmmzcfbo-usbjojoh-805[tnvco]",
    "bkwzkqsxq-bkllsd-ecob-docdsxq-224[oqnvz]",
    "bjfutsneji-jll-yjhmstqtld-671[jltsb]",
    "bnqqnrhud-idkkxadzm-knfhrshbr-131[ngsmj]",
    "ixccb-elrkdcdugrxv-fdqgb-frdwlqj-uhdftxlvlwlrq-101[bcdyz]",
    "xmtjbzidx-xjinphzm-bmvyz-xviyt-mzvxlpdndodji-239[nmkuv]",
    "udskkaxawv-hdsklau-yjskk-umklgewj-kwjnauw-268[ivymz]",
    "gbc-frperg-wryylorna-znantrzrag-715[ragny]",
    "nzydfxpc-rclop-qwzhpc-wlmzclezcj-145[tbvmx]",
    "dzczkrip-xiruv-irsszk-rercpjzj-841[oyhef]",
    "xcitgcpixdcpa-eaphixr-vgphh-gtrtxkxcv-219[yxomp]",
    "wbhsfbohwcboz-qvcqczohs-qighcasf-gsfjwqs-350[nzxwy]",
    "bpvctixr-tvv-uxcpcrxcv-921[lhyge]",
    "pbeebfvir-cynfgvp-tenff-jbexfubc-949[fbecn]",
    "oazegyqd-sdmpq-nmewqf-dqoquhuzs-742[timug]",
    "mvkccspson-tovvilokx-vklybkdybi-328[mqdsy]",
    "wihmogyl-aluxy-yaa-lymyulwb-864[cdyjz]",
    "ynukcajey-acc-yqopkian-oanreya-836[ciysv]",
    "kyelcrga-afmamjyrc-jyzmpyrmpw-756[myarc]",
    "ovbunmneqbhf-onfxrg-fuvccvat-247[dicga]",
    "kwzzwaqdm-zijjqb-uizsmbqvo-252[zqbij]",
    "eqpuwogt-itcfg-hnqygt-ucngu-414[gtucn]",
    "gpsxdprixkt-qjccn-hwxeexcv-167[xcepd]",
    "aczupnetwp-qwzhpc-opdtry-847[pctwz]",
    "zlilocri-mixpqfz-doxpp-pefmmfkd-575[zwkxc]",
    "zloolpfsb-molgbzqfib-yrkkv-ixyloxqlov-783[ztpiu]",
    "dsxxw-qaytclecp-fslr-nspafyqgle-990[swktj]",
    "tcorcikpi-hnqygt-fgukip-492[icgkp]",
    "bnknqetk-bnqqnrhud-qzaahs-rsnqzfd-365[blisk]",
    "xgjougizobk-inuiurgzk-gtgreyoy-176[mjtsi]",
    "bqvvu-nwxxep-opknwca-836[npvwx]",
    "zixppfcfba-ciltbo-pbosfzbp-367[aritf]",
    "oaxadrgx-dmnnuf-mocgueufuaz-898[egbaz]",
    "sno-rdbqds-dff-cdoknxldms-261[nzdys]",
    "gpewwmjmih-fyrrc-jmrergmrk-204[rmegj]",
    "pyknyegle-aylbw-amyrgle-bcnjmwkclr-184[lyeab]",
    "frqvxphu-judgh-fkrfrodwh-vhuylfhv-751[osurb]",
    "oaddaeuhq-pkq-pqbxakyqzf-560[qadkp]",
    "emixwvqhml-xtiabqk-oziaa-lmaqov-694[aimql]",
    "xlrypetn-awldetn-rcldd-opalcexpye-327[orxhy]",
    "ftzgxmbv-cxeeruxtg-vnlmhfxk-lxkobvx-189[xvbef]",
    "ynssr-vtgwr-xgzbgxxkbgz-501[pfkur]",
    "hdgdovmt-bmvyz-xviyt-xjvodib-vivgtndn-915[sztpg]",
    "dszphfojd-sbccju-tbmft-597[hcsfg]",
    "lxuxaodu-ajkkrc-bcxajpn-823[gbmhy]",
    "ktiaaqnqml-ntwemz-ikycqaqbqwv-694[jnmzc]",
    "fydelmwp-nlyoj-xlylrpxpye-171[nxjhg]",
    "kgjgrypw-epybc-pyzzgr-qcptgacq-522[dxcbq]",
    "fnjyxwrinm-ljwmh-lxjcrwp-lxwcjrwvnwc-225[rypmf]",
    "qfkkj-qwzhpc-qtylyntyr-353[xdymf]",
    "szfyrqriuflj-tfejldvi-xiruv-upv-jyzggzex-555[tsjbl]",
    "jlidywncfy-dyffsvyuh-omyl-nymncha-422[zewrd]",
    "ibghopzs-qobrm-gsfjwqsg-298[yzrtb]",
    "molgbzqfib-zxkav-zlxqfkd-cfkxkzfkd-211[ynduw]",
    "mfklstdw-uzgugdslw-ghwjslagfk-372[ckxrl]",
    "wlqqp-wcfnvi-kirzezex-139[axnvq]",
    "dzczkrip-xiruv-gcrjkzt-xirjj-ivjvrity-711[ezhxy]",
    "mhi-lxvkxm-utldxm-lxkobvxl-501[sflto]",
    "vcibutulxiom-mwupyhayl-bohn-qilembij-734[mfszw]",
    "bjfutsneji-hmthtqfyj-ijxnls-671[fhbgw]",
    "mybbycsfo-oqq-oxqsxoobsxq-354[hlsuv]",
    "nwilwcejc-nwxxep-zalwnpiajp-940[wnpac]",
    "cxy-bnlanc-kjbtnc-dbna-cnbcrwp-589[bodjt]",
    "htwwtxnaj-hfsid-xmnuunsl-931[komlw]",
    "qfkkj-prr-dpcgtnpd-847[tfmev]",
    "vdzonmhydc-bnqqnrhud-cxd-rzkdr-547[zrvqc]",
    "frqvxphu-judgh-exqqb-vklsslqj-231[yehnz]",
    "zlilocri-bdd-abpfdk-913[iraty]",
    "jqwpihizlwca-kpwkwtibm-uiviomumvb-408[iwmbk]",
    "tyepcyletzylw-dnlgpyrpc-sfye-dstaatyr-457[dtrmn]",
    "tcfkqcevkxg-dwppa-yqtmujqr-258[gqsxw]",
    "hdgdovmt-bmvyz-zbb-nvgzn-343[ipyzq]",
    "lxaaxbren-ajkkrc-mnenuxyvnwc-537[naxce]",
    "qzchnzbshud-eknvdq-vnqjrgno-859[porxq]",
    "iutyaskx-mxgjk-pkrrehkgt-jkyomt-904[ktgjm]",
    "dsxxw-aylbw-amyrgle-sqcp-rcqrgle-678[vista]",
    "rflsjynh-gzssd-wjfhvznxnynts-853[nsfhj]",
    "ibghopzs-pibbm-rsdzcmasbh-688[bshim]",
    "pbafhzre-tenqr-cynfgvp-tenff-ratvarrevat-377[fgreq]",
    "diozmivodjivg-ezggtwzvi-rjmfncjk-317[npyji]",
    "jsehsyafy-bwddqtwsf-esfsywewfl-632[baclh]",
    "yhtwhnpun-jhukf-jvhapun-jbzavtly-zlycpjl-149[hjlnp]",
    "lnkfaypeha-iehepwnu-cnwza-ydkykhwpa-ykjpwejiajp-706[mnsri]",
    "oxjmxdfkd-avb-obzbfsfkd-705[nmorj]",
    "sxdobxkdsyxkv-mkxni-zebmrkcsxq-276[jqrnw]",
    "xmtjbzidx-mvhkvbdib-agjrzm-xjiovdihzio-733[ibdjm]",
    "xgvnndadzy-xviyt-omvdidib-863[xzgmn]",
    "pejji-mkxni-crszzsxq-224[stivm]",
    "tpspahyf-nyhkl-yhtwhnpun-ibuuf-zlycpjlz-669[hdrst]",
    "zhdsrqlchg-fkrfrodwh-vwrudjh-179[lneqz]",
    "aczupnetwp-qwzhpc-opgpwzaxpye-145[mbxzs]",
    "dzczkrip-xiruv-wcfnvi-uvgcfpdvek-659[gfzeb]",
    "buzahisl-msvdly-ylhjxbpzpapvu-123[iyjzf]",
    "vetllbybxw-vtgwr-vhtmbgz-kxvxbobgz-969[mavkd]",
    "qfkkj-nlyoj-nzyeltyxpye-119[yejkl]",
    "ynssr-vahvhetmx-hixktmbhgl-969[sqpin]",
    "udglrdfwlyh-gbh-ghsduwphqw-621[znqev]",
    "zilqwikbqdm-jcvvg-wxmzibqwva-226[ohfek]",
    "willimcpy-yaa-nluchcha-292[aclhi]",
    "nvrgfezqvu-avccpsvre-ljvi-kvjkzex-763[vecjk]",
    "vkppo-zubboruqd-ixyffydw-504[bykjv]",
    "laffe-hatte-zxgototm-358[taefo]",
    "iuruxlar-jek-iayzuskx-ykxboik-436[wiqzo]",
    "nij-mywlyn-vohhs-womnigyl-mylpcwy-188[ylmnw]",
    "ksodcbwnsr-rms-kcfygvcd-168[yriva]",
    "zilqwikbqdm-kivlg-kwibqvo-tijwzibwzg-980[sncfm]",
    "wsvsdkbi-qbkno-lexxi-mecdywob-cobfsmo-172[pzjhg]",
    "laffe-xghhoz-zxgototm-722[ofght]",
    "nzwzcqfw-nlyoj-pyrtyppctyr-457[jzkil]",
    "uzfqdzmfuazmx-ngzzk-pqbmdfyqzf-378[zfmqd]",
    "ymszqfuo-omzpk-oamfuzs-mocgueufuaz-664[zvhru]",
    "ibghopzs-qvcqczohs-sbuwbssfwbu-350[xmhnj]",
    "cqwdujys-sqdto-seqjydw-mehaixef-348[rwone]",
    "irdgrxzex-irsszk-rercpjzj-659[ftmuq]",
    "amppmqgtc-pyzzgr-pcqcypaf-418[pcagm]",
    "ygcrqpkbgf-tcddkv-fgrnqaogpv-336[szemt]",
    "hjgbwuladw-uzgugdslw-ugflsafewfl-736[armzs]",
    "mbiyqoxsm-mkxni-mykdsxq-domrxyvyqi-328[mxyiq]",
    "willimcpy-vohhs-qilembij-968[ilhmb]",
    "houngfgxjuay-pkrrehkgt-vaxingyotm-930[cnlzy]",
    "ugfkmewj-yjsvw-tskcwl-ugflsafewfl-320[fwlse]",
    "tpspahyf-nyhkl-msvdly-jvuahputlua-825[ahlpu]",
    "qyujihctyx-wbiwifuny-guleyncha-708[imhls]",
    "qczcftiz-pogysh-twbobqwbu-194[xpmrg]",
    "vetllbybxw-xzz-ltexl-969[yzbur]",
    "kdijqrbu-fbqijys-whqii-jhqydydw-556[iqdjy]",
    "oaddaeuhq-rxaiqd-dqeqmdot-560[xtzsw]",
    "kfg-jvtivk-sleep-fgvirkzfej-321[efkvg]",
    "zhdsrqlchg-udeelw-xvhu-whvwlqj-595[tnkyw]",
    "vetllbybxw-ktuubm-etuhktmhkr-787[tbkue]",
    "mybbycsfo-cmkfoxqob-rexd-ckvoc-224[cmktd]",
    "myxcewob-qbkno-oqq-nocsqx-328[fpyew]",
    "nwilwcejc-fahhuxawj-zalhkuiajp-810[askzg]",
    "ovbunmneqbhf-pnaql-ynobengbel-377[nkafy]",
    "qzchnzbshud-okzrshb-fqzrr-nodqzshnmr-677[mnude]",
    "bdavqofuxq-fab-eqodqf-dmnnuf-ogefayqd-eqdhuoq-586[xmztn]",
    "rdchjbtg-vgpst-ytaanqtpc-hpath-531[xmzrt]",
    "vetllbybxw-wrx-mktbgbgz-735[ijzlh]",
    "zvyvgnel-tenqr-pnaql-fuvccvat-689[vnace]",
    "muqfedyput-sqdto-sedjqydcudj-478[dquej]",
    "lahxpnwrl-mhn-jlzdrbrcrxw-147[psbch]",
    "eadalsjq-yjsvw-jsttal-vwnwdghewfl-346[wajls]",
    "hafgnoyr-sybjre-qrfvta-247[rafyb]",
    "votubcmf-tdbwfohfs-ivou-dpoubjonfou-129[zibsh]",
    "jrncbavmrq-pnaql-pbngvat-hfre-grfgvat-143[argnv]",
    "tcrjjzwzvu-sleep-nfibjyfg-555[jefzb]",
    "myxcewob-qbkno-bkllsd-bokmaescsdsyx-406[ghwzx]",
    "cqwdujys-fbqijys-whqii-udwyduuhydw-972[hdvyx]",
    "xqvwdeoh-edvnhw-zrunvkrs-439[jqtmz]",
    "bqvvu-ydkykhwpa-zalhkuiajp-108[xmkdz]",
    "gzefmnxq-eomhqzsqd-tgzf-mzmxkeue-534[emzqf]",
    "zloolpfsb-gbiivybxk-zrpqljbo-pbosfzb-939[symnz]",
    "nzwzcqfw-awldetn-rcldd-cpdplcns-717[cdlnw]",
    "ide-htrgti-rpcsn-rdpixcv-ldgzhwde-661[dirce]",
    "fkqbokxqflkxi-bdd-qoxfkfkd-367[kfdqx]",
    "jlidywncfy-vumeyn-jolwbumcha-214[shtrx]",
    "vagreangvbany-onfxrg-ernpdhvfvgvba-429[shgyt]",
    "odkasqzuo-pkq-xmnadmfadk-742[adkmo]",
    "mvydjvxodqz-xviyt-xjvodib-zibdizzmdib-889[divzb]",
    "dpssptjwf-dboez-eftjho-467[ajfyk]",
    "zilqwikbqdm-xtiabqk-oziaa-kcabwumz-amzdqkm-486[clwnt]",
    "plolwdub-judgh-sodvwlf-judvv-uhfhlylqj-699[trqoi]",
    "bnqqnrhud-rbzudmfdq-gtms-nodqzshnmr-885[dnqmr]",
    "atyzghrk-hatte-vaxingyotm-800[nyzck]",
    "amppmqgtc-afmamjyrc-bctcjmnkclr-730[jbafl]",
    "tpspahyf-nyhkl-yhiipa-svnpzapjz-617[xijwv]",
    "dkqjcbctfqwu-ecpfa-tgugctej-908[ctefg]",
    "hcd-gsqfsh-tzcksf-rsjszcdasbh-896[ayzso]",
    "bknsykmdsfo-lexxi-myxdksxwoxd-380[hxsvz]",
    "vetllbybxw-xzz-tvjnblbmbhg-319[htivo]",
    "bpvctixr-qjccn-hpath-349[kxwzv]",
    "szfyrqriuflj-treup-tfrkzex-cfxzjkztj-347[skbiw]",
    "kwvacumz-ozilm-lgm-lmxtwgumvb-876[gcnyk]",
    "fmsledevhsyw-fyrrc-wivzmgiw-620[mwkyz]",
    "bnmrtldq-fqzcd-bgnbnkzsd-rsnqzfd-781[eiqgm]",
    "amlqskcp-epybc-aylbw-amyrgle-jmegqrgaq-756[uygno]",
    "foadouwbu-xszzmpsob-hsqvbczcum-792[xrtpc]",
    "vjpwncrl-fnjyxwrinm-kdwwh-bcxajpn-719[nwjcp]",
    "enqvbnpgvir-cynfgvp-tenff-qrfvta-195[cpvnk]",
    "buzahisl-lnn-klwhyatlua-851[tmzna]",
    "shmml-enoovg-bcrengvbaf-533[begmn]",
    "pdjqhwlf-hjj-whfkqrorjb-257[jhfqr]",
    "wfintfhynaj-gzssd-wjhjnansl-307[njsaf]",
    "qczcftiz-rms-kcfygvcd-376[kybix]",
    "pbeebfvir-sybjre-jbexfubc-975[jzufx]",
    "irdgrxzex-drxevkzt-wcfnvi-fgvirkzfej-191[wfdlg]",
    "irgyyolokj-lruckx-gtgreyoy-930[wnqvm]",
    "lsyrkjkbnyec-mkxni-mykdsxq-ckvoc-276[gwtls]",
    "enzcntvat-sybjre-znexrgvat-741[mixqj]",
    "myxcewob-qbkno-nio-oxqsxoobsxq-666[dracq]",
    "excdklvo-mkxni-mykdsxq-vklybkdybi-172[kdxyb]",
    "xfbqpojafe-tdbwfohfs-ivou-tijqqjoh-103[mjxla]",
    "rkpqxyib-mixpqfz-doxpp-obzbfsfkd-341[eswqm]",
    "pualyuhapvuhs-wshzapj-nyhzz-thuhnltlua-695[whgcf]",
    "tyepcyletzylw-awldetn-rcldd-nfdezxpc-dpcgtnp-535[dcelp]",
    "dpotvnfs-hsbef-cvooz-eftjho-909[wrstm]",
    "esyfwlau-wyy-jwsuimakalagf-658[cbdnm]",
    "luxciuwncpy-vumeyn-mbcjjcha-396[cujmn]",
    "udskkaxawv-jsttal-vwhsjlewfl-268[alswj]",
    "ckgvutofkj-xghhoz-xkikobotm-410[koght]",
    "kgjgrypw-epybc-njyqrga-epyqq-pcyaosgqgrgml-626[atdyg]",
    "cybyjqho-whqtu-ryexqpqhteki-tou-vydqdsydw-998[bnjht]",
    "froruixo-udeelw-ghvljq-127[bylzc]",
    "forwcoqhwjs-tinnm-gqojsbusf-vibh-fsgsofqv-974[sxtko]",
    "wsvsdkbi-qbkno-mkxni-dbksxsxq-432[ymxdz]",
    "ryexqpqhteki-cybyjqho-whqtu-sqdto-jusxdebewo-634[qehot]",
    "yrwxefpi-hci-wxsveki-750[iewxc]",
    "ugjjgkanw-ujqgywfau-tmffq-hmjuzskafy-788[alfsc]",
    "jef-iushuj-sxesebqju-kiuh-juijydw-114[jueis]",
    "lsyrkjkbnyec-excdklvo-pvygob-yzobkdsyxc-198[ykbco]",
    "eadalsjq-yjsvw-ugjjgkanw-xdgowj-wfyafwwjafy-866[miqfs]",
    "etaqigpke-ecpfa-qrgtcvkqpu-466[qdvna]",
    "frqvxphu-judgh-xqvwdeoh-mhoobehdq-pdqdjhphqw-283[zjdiv]",
    "frqvxphu-judgh-vfdyhqjhu-kxqw-hqjlqhhulqj-283[mnykz]",
    "hjgbwuladw-usfvq-ugslafy-jwkwsjuz-450[mitsc]",
    "rkpqxyib-avb-abpfdk-575[bakpd]",
    "fubrjhqlf-fkrfrodwh-oderudwrub-959[vdxlz]",
    "sgmtkzoi-pkrrehkgt-rumoyzoiy-436[korgi]",
    "hwdtljsnh-idj-wjhjnansl-801[fobmn]",
    "ftzgxmbv-unggr-inkvatlbgz-423[ecjzy]",
    "jrncbavmrq-pnaql-pbngvat-znantrzrag-585[anrbg]",
    "sehheiylu-muqfedyput-rqiauj-tulubefcudj-530[eadkp]",
    "odkasqzuo-pkq-pqhqxabyqzf-950[iyzwg]",
    "lujbbrornm-vjpwncrl-kdwwh-ydalqjbrwp-615[lmjzy]",
    "kpvgtpcvkqpcn-dwppa-rwtejcukpi-336[pcktv]",
    "hwbba-gii-eqpvckpogpv-492[pbgiv]",
    "zsxyfgqj-hqfxxnknji-idj-xytwflj-359[jxfin]"
    ];
    // $scope.part1Output="";
    // $scope.part2Output="";

    function findSectorId(room) {
        var sectorIdStartIndex = room.lastIndexOf("-") + 1;
        var sectorIdEndIndex = room.indexOf("[");
        return parseInt(room.substr(sectorIdStartIndex, sectorIdEndIndex));
    };

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    function getAllCharacterOccurrencesMap(roomName) {
        var occurrences = [];
        var checksum = [];
        var lastcommons = "";

        console.log("getAllCharacterOccurrencesMap :: roomName", roomName);
        console.log("getAllCharacterOccurrencesMap :: roomName.length", roomName.length);

        for (var i = 0; i < roomName.length; i++) {
            var character = roomName.charAt(i);
            // console.log("getAllCharacterOccurrencesMap :: character", character);
            if (!(character == "-") && !(character in occurrences)) {
                var item = {};
                var charAlreadyInOccurences = false;
                item.character = character;
                item.occurrences = getOccurrences(character, roomName);
                for (var j=0; j<occurrences.length; j++) {
                  if(character == occurrences[j].character) charAlreadyInOccurences = true;
                }

                if (!charAlreadyInOccurences) {
                  // console.log("getAllCharacterOccurrencesMap :: adding item to occurrences", item);
                  occurrences.push(item);
                } //else {
                  // console.log("getAllCharacterOccurrencesMap :: character already in occurences list", character);
                // }
            }
        }
        occurrences = occurrences.sort(dynamicSort("occurrences"));
        console.log("getAllCharacterOccurrencesMap :: final occurrences", occurrences);
        console.log("getAllCharacterOccurrencesMap :: occurrences.length", occurrences.length);
        var previousCharOccurence = 0;

        for (var k = 0; k < occurrences.length; k++) {
          //build the checksum
          // console.log("getAllCharacterOccurrencesMap :: previousCharOccurence", previousCharOccurence);
          // console.log("getAllCharacterOccurrencesMap :: occurrences["+k+"].character", occurrences[k].character);
          // console.log("getAllCharacterOccurrencesMap :: occurrences["+k+"].occurrences", occurrences[k].occurrences);
          // console.log("getAllCharacterOccurrencesMap :: checksum.length", checksum.length);

          if (checksum.length >= 4) {
            if (previousCharOccurence > occurrences[k].occurrences) {
              lastcommons += occurrences[k].character;
            } else {
              break;
            }
          } else {
            checksum.push(occurrences[k].character);
          };

          if (k > 0) {
            previousCharOccurence = occurrences[k-1].occurrences;
          } else {
            previousCharOccurence = occurrences[k].occurrences;
          }
          // console.log("************************************");

        }
        checksum.push(lastcommons);
        console.log("getAllCharacterOccurrencesMap :: checksum for this room is", checksum);
        return checksum;
    }

    function isValidRoom (room) {
      var characterList = [];
      var checksumStartId = room.indexOf("[");
      var checksum = room.substr(checksumStartId + 1);
      checksum = checksum.substr(0, checksum.length -1);
      var roomNameEndIndex = room.lastIndexOf("-");
      var roomName = room.substr(0, roomNameEndIndex);

      console.log(">>> isValidRoom :: room", room);
      // console.log("isValidRoom :: checksumStartId", checksumStartId);
      // console.log("isValidRoom :: checksum", checksum);
      // console.log("isValidRoom :: roomNameEndIndex", roomNameEndIndex);
      // console.log("isValidRoom :: roomName", roomName);

      var roomChecksum = getAllCharacterOccurrencesMap(roomName);
      console.log("*** isValidRoom :: compare roomChecksum ["+roomChecksum+"] to checksum ["+checksum+"]");

      var compareChecksums = [];

      for (var i=0; i==4; i++) {
        var tempChar1 = roomChecksum[i];
        var tempChar2 = checksum.charAt(i);
        console.log(">>> compare Checksums :: ["+tempChar1+"] vs ["+tempChar2+"]");
        if (tempChar1 == tempChar2) {
          console.log("*** isValidRoom :: chars match ");
           compareChecksums.push(tempChar2);
        } else {
          console.log("*** isValidRoom :: chars don't match, checking in the commonChars");
          if (tempChar1[i].indexOf(tempChar2) > 0) {
              console.log("*** isValidRoom :: chars found in commons ");
               compareChecksums.push(tempChar2);
             }
        }
      };

      // console.log(">>> compare Checksums :: compareChecksums", compareChecksums);

      if (compareChecksums.length == 5 ) {
        console.log("*** isValidRoom :: checksums match ");
        return true;
      } else {
        console.log("*** isValidRoom :: checksums don't match");
        return false;
      };

      // for (var i=0; i < checksum.length; i++) {
      //       var character = checksum.charAt(i);
      //       var occurrencesRemaining = occurrences;
      //       // console.log("isValidRoom :: character", character);
      //       // console.log("isValidRoom :: occurrences.length", occurrences.length);
      //       // console.log("isValidRoom :: checksum.length", checksum.length);
      //
      //       var characterInOccurences = false;
      //       for (var k=0; k < occurrences.length; k++){
      //         var item = occurrences[k];
      //         // console.log("isValidRoom :: occurrences[k] ", occurrences[k]);
      //         if (character == item.character) {
      //           console.log("*** isValidRoom :: FOUND the character ["+character+"] in occurences at ["+k+"] for checksum ["+checksum+"] - it appears ["+occurrences[k].occurrences+"] times");
      //           characterList.push(occurrences[k]);
      //           occurrencesRemaining.splice(k,1);
      //           characterInOccurences = true;
      //           break;
      //         }
      //       };
      //
      //       if (!characterInOccurences) {
      //         break;
      //       }
      // }

      // if (characterList.length == 5) {
      //
      //     var smallestChecksumOccurrence = parseInt(characterList[4].occurrences);
      //     var largestRemainingRoomOccurrence = parseInt(occurrencesRemaining[0].occurrences);
      //
      //     console.log("*** isValidRoom :: compare smallestChecksumOccurrence ["+smallestChecksumOccurrence+"] to largestRemainingRoomOccurrence ["+largestRemainingRoomOccurrence+"]");
      //     if (smallestChecksumOccurrence >= largestRemainingRoomOccurrence) {
      //       console.log("*** isValidRoom :: all characters found in room ["+roomName+"] for checksum ["+checksum+"] and are the biggest in the room");
      //       return true;
      //     } else {
      //       console.log("*** isValidRoom :: all characters found in room ["+roomName+"] but they are not the biggest 5 in the room ");
      //       return false;
      //     };
      // } else {
      //   console.log("*** isValidRoom :: ["+character+"] was not found in the room ["+roomName+"] for checksum ["+checksum+"] ");
      //   return false;
      // };
    };

    function getOccurrences(character, roomName) {
        // console.log("getOccurrences :: character",character);
        // console.log("getOccurrences :: roomName",roomName);
        var occurrences = 0;
        var index = roomName.indexOf(character);
        // console.log("getOccurrences :: index",index);

        while (index > -1) {
            occurrences++;
            index = roomName.indexOf(character, index + 1);
        }
        // console.log("getOccurrences :: occurrences",occurrences);
        return occurrences;
    }
    //part 1
    //*******************
    function part1(){
      var sum = 0;
      var room = "";

      // for (var i = 0; i < dataArray.length; i++) {
      for (var i = 0; i < 7; i++) {
        room = dataArray[i];
        if (isValidRoom(room)) {
              sum += findSectorId(room);
              console.log("Room {"+room+"} is valid! adding sectorId ["+findSectorId(room)+"] to sum",sum);
        } else {
            // console.log("Room {"+room+"} is INVALID!");

        }
        console.log("---------------------------------------------------------");
      }
      console.log("sum",sum);

      // $scope.part1Output=sum;
      // console.log("part1", $scope.part1Output);
    };
    //***************************************************************************

    //Part 2
    //*******************
    function part2(){
      var possibleCounter = 0;

      for(var line=0;line<dataArray.length;line+=3) {
          var vertical = [];
          for(var i=0;i<3 && line+i<dataArray.length;i++) {
              var lengths = dataArray[line + i].split(',');
              lengths = lengths.filter(function(n){ return n != "" });
              lengths = lengths.map(function(n){ return parseInt(n) });

              vertical.push(lengths);
          }

          var rotated = vertical[0].map(function(col, i) {
            return vertical.map(function(row) {
              return row[i];
            })
          });

          // console.log(JSON.stringify(rotated));

          if(rotated.length == 0) break;

          for(var r in rotated) {
              var triangle = rotated[r];
              if(triangle[0] + triangle[1] > triangle[2] &&
                 triangle[1] + triangle[2] > triangle[0] &&
                 triangle[2] + triangle[0] > triangle[1]) {
                  possibleCounter++;
              }
          }

      }
      // console.log("possibleCounter",possibleCounter);
      // $scope.part2Output=possibleCounter;
    };

    // console.log("part2", $scope.part2Output);

    part1();
    // part2();

// });
//
// })();
