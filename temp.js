
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="no-cache" http-equiv="cache-control">
<meta content="no-cache" http-equiv="pragma">
<meta content="-1" http-equiv="expires">
<link href="./style/styles.css" type="text/css" rel="StyleSheet">
<link href="./style/fonts.css" type="text/css" rel="StyleSheet">
<script src="./scripts/general.js" language="JavaScript"></script>
<title>User Authentication
</title>
<style type="text/css">
  /*The background color of the page*/
body.main {background-color: #FFFFFF}
/*The color of the bars which is up and below the username and credential*/
td.bg {background-color: #993333}
/*The color which around the user-name and customer logo*/
td.inside {background-color: #FFFFFF}
/*The color of the disclaimer check box*/
td.disclaimer {background-color: #FFFFFF}
/*control the disclaimer and check box are appeared or not*/
div.disclaimer {display:none}
/*Control the help link is show or not*/
div.help {display:none}
/*The font of help link*/
p.help {font-family:Geneva,Verdana,Arial,sans-serif; font-size:10pt; display:block; color:#000000;}
/*The font of the accept check box*/
p.accept {font-family:Geneva,Verdana,Arial,sans-serif; font-size:10pt; display:block; color:#000000;}
/*The font of the disclaimer*/
textarea.ex2 {font-family:Times New Roman; font-size:medium; width: 570px; height: 200px; color:#000000;}

</style>
<script type="text/javascript">

  function positionSelect(obj, selectValue) {
    if(obj==null) return;
    if(obj.options==null) return;
    if(obj.options.length==0) return;
    
    for(var i=0; i < obj.options.length; i++) {
      if(obj.options[i].value==selectValue) {
        obj.selectedIndex=i;
        return;
      }
    }
    obj.selectedIndex=0;
  }
  
  function getSelectValue(obj) {
    if(obj==null) {
      return null;
    }
    if(obj.options==null) {
      return null;
    }
    if(obj.options.length==0) {
      return null;
    }
    return obj.options[obj.selectedIndex].value
  }

  function process(form) {
    var domain = getSelectValue(form.fw_domain);
    if (domain != null) {
        form.fw_username.value = domain + "\\" + form.fw_username.value;
    }
  }

  function gather(form) {
    //get the language from server side
    var lang = getURLPar("lang", window.location.search);
    initLang(lang||'en-US');
  }
  
  function checkInput() {
    if(document.user_auth_form.fw_username.value.length==0 || document.user_auth_form.fw_password.value.length==0) {
      alert('Invalid credentials!');
      return false;
    }
    var acceptValue = document.getElementById("accept").value;
    if(acceptValue.trim()  == "true") {
        if(document.getElementById("hsAcceptCkbId").checked == false) {
            alert('Please read and accept the terms and conditions!');
            return false;
        }
    }
  }
</script>
</head>
<body class="main" onload="gather(document.user_auth_form)">
  <form onsubmit="process(this)" id="hsFormId" action="/wgcgi.cgi" name="user_auth_form" method="post">
    <table width="100%" cellspacing="0" cellpadding="0" border="0" height="100%">
      <tbody>
        <tr>
          <td><img width="1" border="0" height="75" alt="" src="./images/pixel.gif"></td>
        </tr>
        <tr valign="middle" align="center">
          <td><table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
                <tr>
                  <td><img width="1" border="0" height="21" alt="" src="./images/pixel.gif"></td>
                  <td style="background-repeat: repeat-x; height: 21px;" colspan="2">
                  <!-- error message -->
                  <b><font color="#FF0000"><span id="errMsg"></span></font></b>
                  <script language="javascript">
                  var errcode=getURLPar("errcode", window.location.search);
                  if(errcode != null) {
                      document.getElementById("errMsg").innerHTML=getErrStr(errcode);
                  }else{
                      document.getElementById("errMsg").innerHTML="";
                  }
                  </script>
                  </td>
                  <td><img width="1" border="0" height="21" alt="" src="./images/pixel.gif"></td>
                </tr>
                <tr>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                  <td width="570" class="bg" height="40" colspan="2">
                    <img width="570" border="0" height="40" alt="" src="./images/pixel.gif">
                  </td>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                </tr>
                <tr>
                  <td width="50%"><img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                  <td class="inside" style="border-right: 1px solid #666666; border-left: 1px solid #666666;" colspan="2">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td width="180" align="center" style="border-right: 1px solid #666666; padding: 0px 5px 0px 5px">
                            <img style="height:65px; width:200px" border="0" alt="WatchGuard Technologies, Inc." src="./auth_portal/Default/logo.gif">

                          </td>
                          <td align="left" style="padding-left: 30px">
                            <table cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td colspan="2"><img width="1" border="0" height="30" alt="" src="./images/pixel.gif"></td>
                                </tr>
                                <tr>
                                  <td align="right"><b>Username:&nbsp;</b></td>
                                  <td><input type="text" autocapitalize="off" value="" size="20" name="fw_username"></td>
                                </tr>
                                <tr>
                                  <td colspan="2"><img width="1" border="0" height="5" alt="" src="./images/pixel.gif"></td>
                                </tr>
                                <tr>
                                  <td align="right"><b>Password:&nbsp;</b></td>
                                  <td><input type="password" autocomplete="off" value="" size="20" name="fw_password"></td>
                                </tr>
                                <tr>
                                  <td colspan="2"><img width="1" border="0" height="5" alt="" src="./images/pixel.gif"></td>
                                </tr>
                                <tr style="">
                                  <!-- Get the domain name from -->
                                  <td/><td>
<input type="hidden" name="fw_domain" value="Firebox-DB"/>
</td>

                                </tr>
                                <tr style="">
                                  <td colspan="2"><img width="1" border="0" height="5" alt="" src="./images/pixel.gif"></td>
                                </tr>
                                <tr>
                                  <td><img width="1" border="0" height="10" alt="" src="./images/pixel.gif"></td>
                                  <td><div align="right">
                                      <img width="1" border="0" height="20" alt="" src="./images/pixel.gif">
                                      <input type="submit" onclick="return checkInput()" name="submit" value="Login">
                                      <input type="reset" name="Reset" value="Reset">
                                    </div></td>
                                </tr>
                                <tr style="display: none;" id="needCookie">
                                  <td style="color: red;" colspan="2">
                                    <a onclick="JavaScript:alert(&quot;[TODO] To launch help where we instruct the users to enable Cookies&quot;); return false" href="#"></a>
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="2">
                                    <img width="1" border="0" height="15" alt="" src="./images/pixel.gif">
                                  </td>
                                </tr>
                              </tbody>
                            </table></td>
                        </tr>
                      </tbody>
                    </table></td>
                  <td width="50%"><img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                </tr>
                <tr>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                  <td width="570" class="bg" height="40" colspan="2">
                  <img width="570" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                </tr>
                <tr>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                  <td width="570" height="40" colspan="2" align="center">
                    <div class="help"><a target="_blank" href='http://www.watchguard.com/
'><p class="help">Don't you have an account? Please click here
</p></a></div>
                  </td>
                  <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                </tr>
              </tbody>
            </table></td>
        </tr>
        <tr>
          <td><img width="1" border="0" height="10" alt="" src="./images/pixel.gif"></td>
        </tr>
        <tr valign="middle" align="center">
        <td>
        <div class="disclaimer">
        <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              <tbody>
               <tr valign="middle" align="center">
                  <td width="50%"><img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                  <td bgcolor="#ffffff" style="border-right: 0px solid #666666; border-left: 0px solid #666666;" colspan="2">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                      <tr valign="middle" align="center">
                      <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                      <td width="570" bgcolor="#ffffff" height="40" colspan="2" border="2">
                      <textarea class="ex2" readonly="readonly">
</textarea>
                      </td>
                      <td><img width="1" border="0" height="40" alt="" src="./images/pixel.gif"></td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%"><img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                </tr>
                <tr valign="middle" align="center">
                <td width="50%"><img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                <td bgcolor="#ffffff" style="border-right: 0px solid #666666; border-left: 0px solid #666666;" colspan="2">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                    <tr valign="middle" align="center">
                      <td class="disclaimer"><img width="1" border="0" height="30" alt="" src="./images/pixel.gif"></td>
                      <td class="disclaimer" width="570" height="30" colspan="2" border="0">
                      <p id="dis" class="accept">
                      <input name="hsAcceptCkbName" id='hsAcceptCkbId' type="checkbox" />
                      <span id="hsAcceptLabelId">I have read and accept the terms and conditions</span>
                      </p>
                      </td>
                      <td class="disclaimer"><img width="1" border="2" height="30" alt="" src="./images/pixel.gif"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="50%">
                <img width="1" border="0" height="1" alt="" src="./images/pixel.gif"></td>
                </tr>
               </tbody>
             </table>
             </div>
            </td>
           </tr>
      </tbody>
    </table>
    <input type="hidden" value="sslvpn_web_logon" name="action">
    <input type="hidden" value="logon" name="fw_logon_type">
    <input type="hidden" value='false
' id="accept">
    <script language="JavaScript">
      document.user_auth_form.fw_username.focus();
    </script>
  </form>
</body>
</html>
