export default function login (files, setWallet) {
    var fr = new FileReader()
    fr.onload = function (ev) {
        try {
            setWallet(JSON.parse(ev.target.result));
        } catch (err) {
            alert('Error logging in: ' + err)
        }
    }
    fr.readAsText(files[0])
}