var ref = {};
    function Expand(ButtonID, CollapsedID, ExpandedID) {
            if (typeof ref[ButtonID] === 'undefined') {
                    ref[ButtonID] = true
            }
            if (ref[ButtonID] == true) {
                    ref[ButtonID] = false;
                    document.getElementById(CollapsedID).id = ExpandedID;
                    document.getElementById(ButtonID).innerText = '[-] Collapse Image';
            } else {
                    ref[ButtonID] = true;
                    document.getElementById(ExpandedID).id = CollapsedID;
                    document.getElementById(ButtonID).innerText = '[+] Expand Image';
            }
}