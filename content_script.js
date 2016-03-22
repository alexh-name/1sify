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

	v = v.replace(/\sein\s/g, " 1 ");
	v = v.replace(/\sEin\s/g, " 1 ");	
	
	v = v.replace(/\seinen\s/g, " 1 ");
	v = v.replace(/\sEinen\s/g, " 1 ");
	
	v = v.replace(/\seinem\s/g, " 1em");
	v = v.replace(/\sEinem\s/g, " 1em ");
	
	v = v.replace(/\seine\s/g, " 1 ");
	v = v.replace(/\sEine\s/g, " 1 ");
	
	v = v.replace(/\sErsten\s/g, " 1sten ");
	v = v.replace(/\sersten\s/g, " 1sten ");
	v = v.replace(/\sErste\s/g, " 1ste ");
	v = v.replace(/\serste$\s/g, " 1ste ");
	
	v = v.replace(/\sEinzig$/g, " 1zig ");
	v = v.replace(/\seinzig$/g, " 1zig ");
	
	v = v.replace(/Es\s*gibt\s*kein\s*richtiges\s*Leben\s*im\s*Falschen/gi, "Was ist das für 1 life");
	


	textNode.nodeValue = v;
}


