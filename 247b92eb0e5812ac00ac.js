"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[57641],{657641:(e,t,a)=>{a.r(t);a.d(t,{default:()=>m});var i={lessThanXSeconds:{one:"λιγότερο από ένα δευτερόλεπτο",other:"λιγότερο από {{count}} δευτερόλεπτα"},xSeconds:{one:"1 δευτερόλεπτο",other:"{{count}} δευτερόλεπτα"},halfAMinute:"μισό λεπτό",lessThanXMinutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από {{count}} λεπτά"},xMinutes:{one:"1 λεπτό",other:"{{count}} λεπτά"},aboutXHours:{one:"περίπου 1 ώρα",other:"περίπου {{count}} ώρες"},xHours:{one:"1 ώρα",other:"{{count}} ώρες"},xDays:{one:"1 ημέρα",other:"{{count}} ημέρες"},aboutXWeeks:{one:"περίπου 1 εβδομάδα",other:"περίπου {{count}} εβδομάδες"},xWeeks:{one:"1 εβδομάδα",other:"{{count}} εβδομάδες"},aboutXMonths:{one:"περίπου 1 μήνας",other:"περίπου {{count}} μήνες"},xMonths:{one:"1 μήνας",other:"{{count}} μήνες"},aboutXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"},xYears:{one:"1 χρόνο",other:"{{count}} χρόνια"},overXYears:{
one:"πάνω από 1 χρόνο",other:"πάνω από {{count}} χρόνια"},almostXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"}};const n=function(e,t,a){var n,r=i[e];n="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t));return null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"σε "+n:n+" πριν":n};var r=a(849526);const o={date:(0,r.Z)({formats:{full:"EEEE, d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"d/M/yy"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{full:"{{date}} - {{time}}",long:"{{date}} - {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var d={lastWeek:function(e){return 6===e.getUTCDay()?"'το προηγούμενο' eeee 'στις' p":"'την προηγούμενη' eeee 'στις' p"},yesterday:"'χθες στις' p",today:"'σήμερα στις' p",tomorrow:"'αύριο στις' p",nextWeek:"eeee 'στις' p",other:"P"};const s=function(e,t){
var a=d[e];return"function"==typeof a?a(t):a};var u=a(688486);const h={ordinalNumber:function(e,t){var a=Number(e),i=null==t?void 0:t.unit;return a+("year"===i||"month"===i?"ος":"week"===i||"dayOfYear"===i||"day"===i||"hour"===i||"date"===i?"η":"ο")},era:(0,u.Z)({values:{narrow:["πΧ","μΧ"],abbreviated:["π.Χ.","μ.Χ."],wide:["προ Χριστού","μετά Χριστόν"]},defaultWidth:"wide"}),quarter:(0,u.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Τ1","Τ2","Τ3","Τ4"],wide:["1ο τρίμηνο","2ο τρίμηνο","3ο τρίμηνο","4ο τρίμηνο"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.Z)({values:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],wide:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},defaultWidth:"wide",formattingValues:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],
abbreviated:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],wide:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},defaultFormattingWidth:"wide"}),day:(0,u.Z)({values:{narrow:["Κ","Δ","T","Τ","Π","Π","Σ"],short:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],abbreviated:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],wide:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},defaultWidth:"wide"}),dayPeriod:(0,u.Z)({values:{narrow:{am:"πμ",pm:"μμ",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},abbreviated:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},wide:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"}},defaultWidth:"wide"})};var l=a(276723);const m={
code:"el",formatDistance:n,formatLong:o,formatRelative:s,localize:h,match:{ordinalNumber:(0,a(360974).Z)({matchPattern:/^(\d+)(ος|η|ο)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,l.Z)({matchPatterns:{narrow:/^(πΧ|μΧ)/i,abbreviated:/^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,wide:/^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^π/i,/^(μ|κ)/i]},defaultParseWidth:"any"}),quarter:(0,l.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^τ[1234]/i,wide:/^[1234]ο? τρ(ί|ι)μηνο/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,l.Z)({matchPatterns:{narrow:/^[ιφμαμιιασονδ]/i,abbreviated:/^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,
wide:/^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ι/i,/^φ/i,/^μ/i,/^α/i,/^μ/i,/^ι/i,/^ι/i,/^α/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i],any:[/^ια/i,/^φ/i,/^μ[άα]ρ/i,/^απ/i,/^μ[άα][ιΐ]/i,/^ιο[ύυ]ν/i,/^ιο[ύυ]λ/i,/^α[ύυ]/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i]},defaultParseWidth:"any"}),day:(0,l.Z)({matchPatterns:{narrow:/^[κδτπσ]/i,short:/^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,abbreviated:/^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,wide:/^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^κ/i,/^δ/i,/^τ/i,/^τ/i,/^π/i,/^π/i,/^σ/i],any:[/^κ/i,/^δ/i,/^τρ/i,/^τε/i,/^π[εέ]/i,/^π[αά]/i,/^σ/i]},defaultParseWidth:"any"}),dayPeriod:(0,l.Z)({matchPatterns:{narrow:/^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,
any:/^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^πμ|π\.\s?μ\./i,pm:/^μμ|μ\.\s?μ\./i,midnight:/^μεσάν/i,noon:/^μεσημ(έ|ε)/i,morning:/πρω(ί|ι)/i,afternoon:/απ(ό|ο)γευμα/i,evening:/βρ(ά|α)δυ/i,night:/ν(ύ|υ)χτα/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}}}]);
//# sourceMappingURL=247b92eb0e5812ac00ac.js.map