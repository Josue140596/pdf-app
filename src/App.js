// Layout
import Layout from 'antd/lib/layout';

// typography
import { Typography, Space } from 'antd/lib';
import { FormPdf} from './components/Form_pdf';


const { Text } = Typography;

const { Header, Footer, Content } = Layout;




const App = () => {
  return (

    <Layout className='layout-content'>
      <Header className='header-content'>
        Creating-PDF
      </Header>
      <Content className='content-form'>
        <FormPdf />

      </Content>
      <Footer className='footer-content'>
        <Space direction='vertical'>
          <Text className='text-footer-1'>
            Creating State of accounts
          </Text>
          <Text className='text-footer'>
            Bryan Sánchez	&copy; 2021 
          </Text>
        </Space>
      </Footer>
    </Layout>
  );
}

export default App;
