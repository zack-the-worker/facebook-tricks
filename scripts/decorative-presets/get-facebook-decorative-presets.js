function createDecorativeTable(data) {
	// Get the "Decorative" category
	const decorativeCategory = data.categorized_text_format_presets.find(
	  (category) => category.name === "Decorative"
	);
  
	if (!decorativeCategory) {
	  console.error("Category not found: 'Decorative'");
	  return;
	}
  
	// Create the table element
	const table = document.createElement("table");
	table.style.borderCollapse = "collapse";
	table.style.width = "100%";
	table.style.marginTop = "20px";
	table.style.backgroundColor = "white";
	table.style.color = "black";
  
	// Tạo header của bảng
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");
	const headers = ["ID", "Description", "Thumbnail", "Background Color", "Text Color"];
  
	headers.forEach((headerText) => {
	  const th = document.createElement("th");
	  th.textContent = headerText;
	  th.style.border = "1px solid #ddd";
	  th.style.padding = "8px";
	  th.style.textAlign = "left";
	  headerRow.appendChild(th);
	});
  
	thead.appendChild(headerRow);
	table.appendChild(thead);
  
	// Create the table body
	const tbody = document.createElement("tbody");
  
	decorativeCategory.ranked_text_format_presets.forEach((presetItem) => {
	  const preset = presetItem.preset;
  
	  const row = document.createElement("tr");
  
	  // ID
	  const idCell = document.createElement("td");
	  idCell.textContent = preset.preset_id;
	  idCell.style.border = "1px solid #ddd";
	  idCell.style.padding = "8px";
	  row.appendChild(idCell);
  
	  // Description
	  const descriptionCell = document.createElement("td");
	  descriptionCell.textContent = preset.background_description || "N/A";
	  descriptionCell.style.border = "1px solid #ddd";
	  descriptionCell.style.padding = "8px";
	  row.appendChild(descriptionCell);
  
	  // Thumbnail
	  const thumbnailCell = document.createElement("td");
	  if (preset.default_thumbnail && preset.default_thumbnail.uri) {
		const img = document.createElement("img");
		img.src = preset.default_thumbnail.uri;
		img.style.maxWidth = "50px";
		img.style.maxHeight = "50px";
		thumbnailCell.appendChild(img);
	  } else {
		thumbnailCell.textContent = "N/A";
	  }
	  thumbnailCell.style.border = "1px solid #ddd";
	  thumbnailCell.style.padding = "8px";
	  row.appendChild(thumbnailCell);
  
	  // Background Color
	  const bgColorCell = document.createElement("td");
	  bgColorCell.textContent = preset.background_color || "N/A";
	  bgColorCell.style.border = "1px solid #ddd";
	  bgColorCell.style.padding = "8px";
	  row.appendChild(bgColorCell);
  
	  // Text Color
	  const textColorCell = document.createElement("td");
	  textColorCell.textContent = preset.color || "N/A";
	  textColorCell.style.border = "1px solid #ddd";
	  textColorCell.style.padding = "8px";
	  row.appendChild(textColorCell);
  
	  tbody.appendChild(row);
	});
  
	table.appendChild(tbody);
  
	// Replace the table with the existing table in the body
	document.body.innerHTML = table.outerHTML;
}

async function makeGraphQLRequest() {
  // Get the necessary parameters
  const _dtsg_token = require(["DTSGInitData"]).token;
  const _spin_r = require(["SiteData"]).__spin_r;
  const _spin_b = require(["SiteData"]).__spin_b;
  const _spin_t = require(["SiteData"]).__spin_t;
  const _hsi = require(["SiteData"]).hsi;
  const _current_user_id = require(["CurrentUserInitialData"]).USER_ID;
  const _hs = require(["SiteData"]).haste_session;
  
  // Create the header
  const headers = {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.facebook.com',
    'priority': 'u=1, i',
    'referer': 'https://www.facebook.com/',
    'sec-ch-prefers-color-scheme': 'light',
    'sec-ch-ua': '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-full-version-list': '"Microsoft Edge";v="135.0.3179.73", "Not-A.Brand";v="8.0.0.0", "Chromium";v="135.0.7049.85"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"19.0.0"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0',
    'x-asbd-id': '359341',
    'x-fb-friendly-name': 'CometComposerSwatchPickerMenuUsingRelayEntrypointQuery',
    'x-fb-lsd': document.querySelector('input[name="lsd"]')?.value || ''
  };

  // Create the body
  const formData = new URLSearchParams();
  formData.append('av', _current_user_id);
  formData.append('__aaid', '0');
  formData.append('__user', _current_user_id);
  formData.append('__a', '1');
  formData.append('__req', '2o');
  formData.append('__hs', _hs);
  formData.append('dpr', '1');
  formData.append('__ccg', 'EXCELLENT');
  formData.append('__rev', _spin_r);
  formData.append('__s', 'z3uaui:7iwfrr:nq05lm');
  formData.append('__hsi', _hsi);
  formData.append('__dyn', '');
  formData.append('__csr', '');
  formData.append('__comet_req', '15');
  formData.append('fb_dtsg', _dtsg_token);
  formData.append('jazoest', '25437');
  formData.append('lsd', '');
  formData.append('__spin_r', _spin_r);
  formData.append('__spin_b', _spin_b);
  formData.append('__spin_t', _spin_t);
  formData.append('__crn', 'comet.fbweb.CometHomeRoute');
  formData.append('fb_api_caller_class', 'RelayModern');
  formData.append('fb_api_req_friendly_name', 'CometComposerSwatchPickerMenuUsingRelayEntrypointQuery');
  formData.append('variables', '{"containsCustomSwatchCategory":true,"scale":1}');
  formData.append('server_timestamps', 'true');
  formData.append('doc_id', '9236602696415853');

  try {
    const response = await fetch('https://www.facebook.com/api/graphql/', {
      method: 'POST',
      headers: headers,
      body: formData,
      credentials: 'include'
    });
    
    const data = await response.json();
    console.log('Response:', data);
    createDecorativeTable(data.data.viewer);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Run the function
makeGraphQLRequest()
  .then(result => console.log('Request completed successfully'))
  .catch(error => console.error('Request failed:', error));
