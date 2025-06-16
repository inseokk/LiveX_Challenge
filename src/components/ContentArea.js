import React from 'react';
import './ContentArea.css';
import HighlightedText from './HighlightedText';

function ContentArea({ currentPage, searchQuery }) {
  const generateLoremText = () => {
    // Different content for different pages
    const appsContent = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Applications are essential tools for modern productivity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt feugiat dapibus. Nulla in sapien ligula. Vivamus dapibus felis viverra lacinia luctus. Phasellus eget lacinia justo. Quisque at pellentesque purus, pretium ullamcorper odio. Suspendisse turpis odio, congue non ex at, auctor sollicitudin purus. Aliquam et mauris iaculis, auctor quam eu, lobortis orci. Phasellus diam est, bibendum id tincidunt vel, placerat sit amet purus. Sed sollicitudin diam finibus orci lobortis, ac pulvinar mauris lacinia. Donec porttitor fermentum luctus. Ut nec varius erat. Nunc eget eros libero. Maecenas sodales augue at enim bibendum, in ornare sapien iaculis. Sed id mi et felis aliquet suscipit. Mauris dignissim tincidunt dapibus. In fringilla fermentum eleifend. Praesent et placerat sem. Fusce a scelerisque nibh, a imperdiet felis. Duis bibendum elit nec purus bibendum, in elementum sapien maximus. Phasellus vel commodo sem. Etiam pretium lorem at sem aliquam, quis condimentum felis hendrerit. Nulla facilisi. Nullam in neque eu tellus efficitur imperdiet. Nulla facilisi. Nunc sed orci congue, consectetur ante a, aliquet justo. Sed nec fermentum eros. Etiam vel risus vel tortor eleifend tincidunt. Maecenas commodo elit ut tempus aliquet. Etiam eget est elementum, gravida quam vitae, luctus lectus. Vestibulum semper ligula quis nunc ultrices, eu condimentum sem semper. Mauris id posuere mauris. Vestibulum pulvinar libero sed dolor vulputate eleifend. Vivamus congue auctor condimentum. Integer lobortis porttitor libero. Curabitur id ante convallis, blandit tortor ac, tincidunt neque. Duis et quam at ex cursus consectetur vitae quis massa. Sed pharetra vitae augue ut sollicitudin. Cras suscipit nisl nec dui gravida, ut aliquet mauris posuere. Integer egestas quis dui id porta. Ut sit amet porta mauris, sit amet faucibus enim. Sed tincidunt porta rhoncus.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mobile apps have revolutionized communication.Maecenas sit amet eros non elit semper finibus eget eu dolor. Phasellus metus lectus, porttitor id nisi nec, consequat porta libero. Nullam in ullamcorper orci, sed interdum turpis. Cras egestas nisl justo, at commodo odio ornare ac. Nullam ipsum metus, dignissim tempus imperdiet a, porttitor et sapien. Phasellus a sem vel ipsum dictum tristique vel eget erat. In a semper nisl. Suspendisse neque neque, facilisis in porta non, euismod et augue. Maecenas dapibus quam sed tempus laoreet. Etiam rhoncus, elit quis pellentesque finibus, urna ante mattis velit, ut pretium tortor purus vitae ipsum. Etiam vitae commodo orci, posuere vestibulum quam. Mauris sit amet commodo dui, ut dignissim lacus. Maecenas viverra sem velit, vitae accumsan urna lobortis at. Aliquam sed diam non libero condimentum porttitor. Nullam pulvinar, elit vel pulvinar pretium, ipsum metus rhoncus neque, eleifend tempor turpis nisi nec felis. Cras pretium metus ut justo efficitur imperdiet. Phasellus est ligula, pellentesque at maximus quis, rutrum ac magna. Morbi eget est pharetra, consequat lorem a, tincidunt sapien. Donec non fermentum nulla, id consequat ante. Curabitur et elit turpis. Donec varius nulla et euismod dignissim. Etiam tincidunt feugiat sodales. Sed at est et arcu tincidunt tristique. Vivamus posuere leo ultrices diam imperdiet tempor. Duis lectus ipsum, lobortis ac nisi in, egestas placerat ante. Integer consectetur, justo id iaculis venenatis, augue purus luctus justo, vel elementum est libero sed metus.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Desktop applications provide powerful features. In fringilla fermentum eleifend. Praesent et placerat sem. Fusce a scelerisque nibh, a imperdiet felis. Duis bibendum elit nec purus bibendum, in elementum sapien maximus. Phasellus vel commodo sem. Etiam pretium lorem at sem aliquam, quis condimentum felis hendrerit. Nulla facilisi. Nullam in neque eu tellus efficitur imperdiet. Nulla facilisi. Nunc sed orci congue, consectetur ante a, aliquet justo. Sed nec fermentum eros. Etiam vel risus vel tortor eleifend tincidunt. Maecenas commodo elit ut tempus aliquet. Etiam eget est elementum, gravida quam vitae, luctus lectus. Vestibulum semper ligula quis nunc ultrices, eu condimentum sem semper. Mauris id posuere mauris. Vestibulum pulvinar libero sed dolor vulputate eleifend. Vivamus congue auctor condimentum. Integer lobortis porttitor libero. Curabitur id ante convallis, blandit tortor ac, tincidunt neque. Duis et quam at ex cursus consectetur vitae quis massa. Sed pharetra vitae augue ut sollicitudin. Cras suscipit nisl nec dui gravida, ut aliquet mauris posuere. Integer egestas quis dui id porta. Ut sit amet porta mauris, sit amet faucibus enim. Sed tincidunt porta rhoncus.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Web applications offer cross-platform compatibility."
    ];

    const documentsContent = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Applications are essential tools for modern productivity. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt feugiat dapibus. Nulla in sapien ligula. Vivamus dapibus felis viverra lacinia luctus. Phasellus eget lacinia justo. Quisque at pellentesque purus, pretium ullamcorper odio. Suspendisse turpis odio, congue non ex at, auctor sollicitudin purus. Aliquam et mauris iaculis, auctor quam eu, lobortis orci. Phasellus diam est, bibendum id tincidunt vel, placerat sit amet purus. Sed sollicitudin diam finibus orci lobortis, ac pulvinar mauris lacinia. Donec porttitor fermentum luctus. Ut nec varius erat. Nunc eget eros libero. Maecenas sodales augue at enim bibendum, in ornare sapien iaculis. Sed id mi et felis aliquet suscipit. Mauris dignissim tincidunt dapibus. In fringilla fermentum eleifend. Praesent et placerat sem. Fusce a scelerisque nibh, a imperdiet felis. Duis bibendum elit nec purus bibendum, in elementum sapien maximus. Phasellus vel commodo sem. Etiam pretium lorem at sem aliquam, quis condimentum felis hendrerit. Nulla facilisi. Nullam in neque eu tellus efficitur imperdiet. Nulla facilisi. Nunc sed orci congue, consectetur ante a, aliquet justo. Sed nec fermentum eros. Etiam vel risus vel tortor eleifend tincidunt. Maecenas commodo elit ut tempus aliquet. Etiam eget est elementum, gravida quam vitae, luctus lectus. Vestibulum semper ligula quis nunc ultrices, eu condimentum sem semper. Mauris id posuere mauris. Vestibulum pulvinar libero sed dolor vulputate eleifend. Vivamus congue auctor condimentum. Integer lobortis porttitor libero. Curabitur id ante convallis, blandit tortor ac, tincidunt neque. Duis et quam at ex cursus consectetur vitae quis massa. Sed pharetra vitae augue ut sollicitudin. Cras suscipit nisl nec dui gravida, ut aliquet mauris posuere. Integer egestas quis dui id porta. Ut sit amet porta mauris, sit amet faucibus enim. Sed tincidunt porta rhoncus.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mobile apps have revolutionized communication.Maecenas sit amet eros non elit semper finibus eget eu dolor. Phasellus metus lectus, porttitor id nisi nec, consequat porta libero. Nullam in ullamcorper orci, sed interdum turpis. Cras egestas nisl justo, at commodo odio ornare ac. Nullam ipsum metus, dignissim tempus imperdiet a, porttitor et sapien. Phasellus a sem vel ipsum dictum tristique vel eget erat. In a semper nisl. Suspendisse neque neque, facilisis in porta non, euismod et augue. Maecenas dapibus quam sed tempus laoreet. Etiam rhoncus, elit quis pellentesque finibus, urna ante mattis velit, ut pretium tortor purus vitae ipsum. Etiam vitae commodo orci, posuere vestibulum quam. Mauris sit amet commodo dui, ut dignissim lacus. Maecenas viverra sem velit, vitae accumsan urna lobortis at. Aliquam sed diam non libero condimentum porttitor. Nullam pulvinar, elit vel pulvinar pretium, ipsum metus rhoncus neque, eleifend tempor turpis nisi nec felis. Cras pretium metus ut justo efficitur imperdiet. Phasellus est ligula, pellentesque at maximus quis, rutrum ac magna. Morbi eget est pharetra, consequat lorem a, tincidunt sapien. Donec non fermentum nulla, id consequat ante. Curabitur et elit turpis. Donec varius nulla et euismod dignissim. Etiam tincidunt feugiat sodales. Sed at est et arcu tincidunt tristique. Vivamus posuere leo ultrices diam imperdiet tempor. Duis lectus ipsum, lobortis ac nisi in, egestas placerat ante. Integer consectetur, justo id iaculis venenatis, augue purus luctus justo, vel elementum est libero sed metus.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Desktop applications provide powerful features. In fringilla fermentum eleifend. Praesent et placerat sem. Fusce a scelerisque nibh, a imperdiet felis. Duis bibendum elit nec purus bibendum, in elementum sapien maximus. Phasellus vel commodo sem. Etiam pretium lorem at sem aliquam, quis condimentum felis hendrerit. Nulla facilisi. Nullam in neque eu tellus efficitur imperdiet. Nulla facilisi. Nunc sed orci congue, consectetur ante a, aliquet justo. Sed nec fermentum eros. Etiam vel risus vel tortor eleifend tincidunt. Maecenas commodo elit ut tempus aliquet. Etiam eget est elementum, gravida quam vitae, luctus lectus. Vestibulum semper ligula quis nunc ultrices, eu condimentum sem semper. Mauris id posuere mauris. Vestibulum pulvinar libero sed dolor vulputate eleifend. Vivamus congue auctor condimentum. Integer lobortis porttitor libero. Curabitur id ante convallis, blandit tortor ac, tincidunt neque. Duis et quam at ex cursus consectetur vitae quis massa. Sed pharetra vitae augue ut sollicitudin. Cras suscipit nisl nec dui gravida, ut aliquet mauris posuere. Integer egestas quis dui id porta. Ut sit amet porta mauris, sit amet faucibus enim. Sed tincidunt porta rhoncus.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Web applications offer cross-platform compatibility."
    ];

    const homeContent = [
      "Hello, this is Inseo Kim's submission for the Frontend Development Challenge: Chatbot Website. Thank you for your consideration!"
    ];

    return currentPage === 'Apps' ? appsContent
        : currentPage === 'Documents' ? documentsContent
        : homeContent;
  };

  const allParagraphs = generateLoremText();

  // Filter paragraphs based on search query
  const filteredParagraphs = searchQuery.trim() 
    ? allParagraphs.filter(paragraph => 
        paragraph.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allParagraphs;

  return (
    <div className="content-area">
      <h2>{currentPage} Page</h2>
      
      {/* Show search info if there's a search query */}
      {searchQuery.trim() && (
        <div className="search-info">
          {filteredParagraphs.length > 0 
            ? `Found ${filteredParagraphs.length} result(s) for "${searchQuery}"`
            : `No results found for "${searchQuery}"`
          }
        </div>
      )}

      {/* Show filtered paragraphs or no results message */}
      {filteredParagraphs.length > 0 ? (
        filteredParagraphs.map((paragraph, index) => (
          <p key={index} className="content-paragraph">
            <HighlightedText text={paragraph} searchQuery={searchQuery} />
          </p>
        ))
      ) : searchQuery.trim() ? (
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try searching for different keywords like "app", "document", "digital", or "mobile".</p>
        </div>
      ) : (
        // Show all paragraphs when no search query
        allParagraphs.map((paragraph, index) => (
          <p key={index} className="content-paragraph">
            {paragraph}
          </p>
        ))
      )}
    </div>
  );
}

export default ContentArea;