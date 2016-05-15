document.addEventListener("DOMNodeInserted", function(e) {
	walk(document.body);
}, false);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/Es\b*gibt\b*kein\b*richtiges\b*Leben\b*im\b*Falschen/gi, "Was ist das für 1 life");

	v = v.replace(/\bk(ein|eine)\b/g, "k1");
	v = v.replace(/\bK(ein|eine)\b/g, "K1");
	v = v.replace(/\b(ein|eine)\b/gi, "1");

	v = v.replace(/\bkeinem\b/g, "k1em");
	v = v.replace(/\bKeinem\b/g, "K1em");
	v = v.replace(/\beinem\b/gi, "1em");

	v = v.replace(/\bkeiner\b/g, "k1er");
	v = v.replace(/\bKeiner\b/g, "K1er");
	v = v.replace(/\beiner\b/gi, "1er");

	v = v.replace(/\bkeinen\b/g, "k1en");
	v = v.replace(/\bKeinen\b/g, "K1en");
	v = v.replace(/\beinen\b/gi, "1en");
	
	v = v.replace(/\bersten\b/gi, "1sten");
	v = v.replace(/\berste$\b/gi, "1ste");
	
	v = v.replace(/\beinzig\b/gi, "1zig");

	textNode.nodeValue = v;
}
