dp.sh.Brushes.ColdFusion = function()
{
	this.CssClass		=	'dp-coldfusion';
	this.Style			=	'.dp-coldfusion { font: 13px "Courier New", Courier, monospace; }' +
							'.dp-coldfusion .tag, .dp-coldfusion .tag-name { color: #990033; }' +
							'.dp-coldfusion .attribute { color: #990033; }' +
							'.dp-coldfusion .attribute-value { color: #0000FF; }' +
							'.dp-coldfusion .cfcomments { background-color: #FFFF99; color: #000000; }' +
							'.dp-coldfusion .cfscriptcomments { color: #999999; }' +
							'.dp-coldfusion .keywords { color: #0000FF; }' +
							'.dp-coldfusion .mgkeywords { color: #CC9900; }' +
							'.dp-coldfusion .numbers { color: #ff0000; }' +
							'.dp-coldfusion .strings { color: green; }';

	this.mgKeywords		=	'setvalue getvalue addresult viewcollection viewstate';

	this.keywords		=	'var eq neq gt gte lt lte not and or true false ' +
							'abs acos addsoaprequestheader addsoapresponseheader ' +
							'arrayappend arrayavg arrayclear arraydeleteat arrayinsertat ' +
							'arrayisempty arraylen arraymax arraymin arraynew ' +
							'arrayprepend arrayresize arrayset arraysort arraysum ' +
							'arrayswap arraytolist asc asin atn binarydecode binaryencode ' +
							'bitand bitmaskclear bitmaskread bitmaskset bitnot bitor bitshln ' +
							'bitshrn bitxor ceiling charsetdecode charsetencode chr cjustify ' +
							'compare comparenocase cos createdate createdatetime createobject ' +
							'createobject createobject createobject createobject createodbcdate ' +
							'createodbcdatetime createodbctime createtime createtimespan ' +
							'createuuid dateadd datecompare dateconvert datediff dateformat ' +
							'datepart day dayofweek dayofweekasstring dayofyear daysinmonth ' +
							'daysinyear de decimalformat decrementvalue decrypt decryptbinary ' +
							'deleteclientvariable directoryexists dollarformat duplicate encrypt ' +
							'encryptbinary evaluate exp expandpath fileexists find findnocase ' +
							'findoneof firstdayofmonth fix formatbasen generatesecretkey ' +
							'getauthuser getbasetagdata getbasetaglist getbasetemplatepath ' +
							'getclientvariableslist getcontextroot getcurrenttemplatepath ' +
							'getdirectoryfrompath getencoding getexception getfilefrompath ' +
							'getfunctionlist getgatewayhelper gethttprequestdata gethttptimestring ' +
							'getk2serverdoccount getk2serverdoccountlimit getlocale ' +
							'getlocaledisplayname getlocalhostip getmetadata getmetricdata ' +
							'getpagecontext getprofilesections getprofilestring getsoaprequest ' +
							'getsoaprequestheader getsoapresponse getsoapresponseheader ' +
							'gettempdirectory gettempfile gettemplatepath gettickcount ' +
							'gettimezoneinfo gettoken hash hour htmlcodeformat htmleditformat ' +
							'iif incrementvalue inputbasen insert int isarray isbinary isboolean ' +
							'iscustomfunction isdate isdebugmode isdefined isk2serverabroker ' +
							'isk2serverdoccountexceeded isk2serveronline isleapyear islocalhost ' +
							'isnumeric isnumericdate isobject isquery issimplevalue issoaprequest ' +
							'isstruct isuserinrole isvalid isvalid isvalid iswddx isxml ' +
							'isxmlattribute isxmldoc isxmlelem isxmlnode isxmlroot javacast ' +
							'jsstringformat lcase left len listappend listchangedelims listcontains ' +
							'listcontainsnocase listdeleteat listfind listfindnocase listfirst ' +
							'listgetat listinsertat listlast listlen listprepend listqualify ' +
							'listrest listsetat listsort listtoarray listvaluecount ' +
							'listvaluecountnocase ljustify log log10 lscurrencyformat lsdateformat ' +
							'lseurocurrencyformat lsiscurrency lsisdate lsisnumeric lsnumberformat ' +
							'lsparsecurrency lsparsedatetime lsparseeurocurrency lsparsenumber ' +
							'lstimeformat ltrim max mid min minute month monthasstring now ' +
							'numberformat paragraphformat parameterexists parsedatetime pi ' +
							'preservesinglequotes quarter queryaddcolumn queryaddrow querynew ' +
							'querysetcell quotedvaluelist rand randomize randrange refind ' +
							'refindnocase releasecomobject removechars repeatstring replace ' +
							'replacelist replacenocase rereplace rereplacenocase reverse right ' +
							'rjustify round rtrim second sendgatewaymessage setencoding ' +
							'setlocale setprofilestring setvariable sgn sin spanexcluding ' +
							'spanincluding sqr stripcr structappend structclear structcopy ' +
							'structcount structdelete structfind structfindkey structfindvalue ' +
							'structget structinsert structisempty structkeyarray structkeyexists ' +
							'structkeylist structnew structsort structupdate tan timeformat ' +
							'tobase64 tobinary toscript tostring trim ucase urldecode urlencodedformat ' +
							'urlsessionformat val valuelist week wrap writeoutput xmlchildpos ' +
							'xmlelemnew xmlformat xmlgetnodetype xmlnew xmlparse xmlsearch xmltransform ' +
							'xmlvalidate year yesnoformat';

	// Array to hold the possible string matches
	this.stringMatches	=	new Array();
	this.attributeMatches	=	new Array();
}

dp.sh.Brushes.ColdFusion.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.ColdFusion.Aliases	= ['coldfusion', 'cf'];

dp.sh.Brushes.ColdFusion.prototype.ProcessRegexList = function()
{
	function push(array, value)
	{
		array[array.length] = value;
	}

	function find(array, element)
	{
		for(var i = 0; i < array.length; i++){
			if(array[i] == element){
				return i;
			}
		}

		return -1;
	}

	var match	= null;
	var regex	= null;

	// Match numbers
	// (\\d+)
	this.GetMatches(new RegExp('\\b(\\d+)', 'gm'), 'numbers');

	// Match mg keywords
	this.GetMatches(new RegExp(this.GetKeywords(this.mgKeywords), 'igm'), 'mgkeywords');

	// Match single line comments via the built in single line regex (for cfscript)
	this.GetMatches(dp.sh.RegexLib.SingleLineCComments, 'cfscriptcomments');

	// Match multi line comments via the built in multi line regex (for cfscript)
	this.GetMatches(dp.sh.RegexLib.MultiLineCComments, 'cfscriptcomments');

	// Match tag based comments (including multiline comments)
	// (\&lt;|<)!---[\\s\\S]*?---(\&gt;|>)
	this.GetMatches(new RegExp('(\&lt;|<)!---[\\s\\S]*?---(\&gt;|>)', 'gm'), 'cfcomments');

	// Match attributes and their values excluding cfset tags
	// (cfset\\s*)?([:\\w-\.]+)\\s*=\\s*(".*?"|\'.*?\')*
	regex = new RegExp('(cfset\\s*)?([:\\w-\.]+)\\s*=\\s*(".*?"|\'.*?\')*', 'gm');
	while((match = regex.exec(this.code)) != null)
	{
		// If there is match in element 1 (the tag is cfset), continute to the next match
		if (match[1] != undefined && match[1] != '')
		{
			continue;
		}

		// Add the atribute to the matches only if it has a matching value (dbtype="query")
		// and the match is not an empty string
		if (match[3] != undefined && match[3] != '' && match[3] != '""' && match[3] != "''")
		{
			push(this.matches, new dp.sh.Match(match[2], match.index, 'attribute'));
			push(this.matches, new dp.sh.Match(match[3], match.index + match[0].indexOf(match[3]), 'attribute-value'));
			// Add the attribute value to the array of string matches
			push(this.stringMatches, match[3]);

			// Add the attribute to the array of attribute matches
			push(this.attributeMatches, match[2]);
		}
	}

	// Match opening and closing tag brackets
	// (\&lt;|<)/*\?*(?!\!)|/*\?*(\&gt;|>)
	this.GetMatches(new RegExp('(\&lt;|<)/*\\?*(?!\\!)|/*\\?*(\&gt;|>)', 'gm'), 'tag');

	// Match tag names
	// (\&lt;|<)/*\?*\s*(\w+)
	regex = new RegExp('(?:\&lt;|<)/*\\?*\\s*([:\\w-\.]+)', 'gm');
	while((match = regex.exec(this.code)) != null)
	{
		push(this.matches, new dp.sh.Match(match[1], match.index + match[0].indexOf(match[1]), 'tag-name'));
	}

	// Match keywords
	regex = new RegExp(this.GetKeywords(this.keywords), 'igm');
	while((match = regex.exec(this.code)) != null)
	{
		// if a match exists (there is a value for the attribute)
		if (find(this.attributeMatches, match[0]) == -1)
		{
			push(this.matches, new dp.sh.Match(match[0], match.index, 'keywords'));
		}
	}

	// Match cfset tags and quoated attributes
	regex = new RegExp('cfset\\s*.*(".*?"|\'.*?\')', 'gm');
	while((match = regex.exec(this.code)) != null)
	{
		// if a match exists (there is a value for the attribute)
		if(match[1] != undefined && match[1] != '')
		{
			push(this.matches, new dp.sh.Match(match[1], match.index + match[0].indexOf(match[1]), 'strings'));

			// Add the attribute to the array of string matches
			push(this.stringMatches, match[1]);
		}
	}

	// Match string enclosed in double quoats
	while((match = dp.sh.RegexLib.DoubleQuotedString.exec(this.code)) != null)
	{
		//if (this.stringMatches.indexOf(match[0]) == -1)
		if (find(this.stringMatches, match[0]) == -1)
			push(this.matches, new dp.sh.Match(match[0], match.index, 'strings'));
	}

	// Match string enclosed in single quoats
	while((match = dp.sh.RegexLib.SingleQuotedString.exec(this.code)) != null)
	{
		//if (this.stringMatches.indexOf(match[0]) == -1)
		if (find(this.stringMatches, match[0]) == -1)
			push(this.matches, new dp.sh.Match(match[0], match.index, 'strings'));
	}
}