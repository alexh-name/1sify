walk(document.body);

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

	v = v.replace(/\sein\s|\seinen\s|\seine\s/gi, " 1 ");
	
	v = v.replace(/\seinem\s/gi, " 1em ");
	
	v = v.replace(/\sersten\s/gi, " 1sten ");
	v = v.replace(/\serste$\s/gi, " 1ste ");
	
	v = v.replace(/\seinzig$/gi, " 1zig ");
	
	v = v.replace(/Es\s*gibt\s*kein\s*richtiges\s*Leben\s*im\s*Falschen/gi, "Was ist das für 1 life");

	
	


	textNode.nodeValue = v;
}


