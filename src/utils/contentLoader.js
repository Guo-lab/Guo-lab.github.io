import { Buffer } from 'buffer';
import matter from 'gray-matter';

window.Buffer = Buffer;

const loadProjectDetails = async (projectTitle) => {
  const filename = projectTitle.replace(/\s+/g, '-').toLowerCase();

  const markdownPath = `content/projects/${filename}.md`;
  
  try {
    console.info('🔍 DEBUG: Fetching MARKDOWN from path:', markdownPath);
    console.info('🔍 DEBUG: Full URL will be:', `${window.location.origin}/${markdownPath}`);
    
    const response = await fetch(markdownPath);
    console.info('📄 MARKDOWN fetch response:', response);
    
    if (!response.ok) {
      console.info('❌ Response not OK:', response.status, response.statusText);
      return null;
    }
    
    console.info('📖 Reading response text...');
    const markdown = await response.text();
    console.info('✅ Successfully read markdown text, length:', markdown.length);
    
    console.info('🔧 Parsing with gray-matter...');
    const { data, content } = matter(markdown);
    
    console.info('✅ Parsed metadata:', data);
    console.info('✅ Parsed content preview:', content.substring(0, 100) + '...');

    return { metadata: data, content };
  } catch (error) {
    console.error('❌ Error in loadProjectDetails:', error);
    return null;
  }
};

export default loadProjectDetails;
