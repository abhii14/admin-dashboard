
import { useState } from 'react';
import { Button, Input, Card } from '@nextui-org/react';

const Settings = () => {
  const [settings, setSettings] = useState({
    appName: 'Admin Dashboard',
    theme: 'light',
  });

  const handleSaveSettings = () => {
    // Save settings logic
  };

  return (
    <div>
      <Card>
        <Input
          clearable
          underlined
          labelPlaceholder="App Name"
          value={settings.appName}
          onChange={e => setSettings({ ...settings, appName: e.target.value })}
        />
        <Input
          clearable
          underlined
          labelPlaceholder="Theme"
          value={settings.theme}
          onChange={e => setSettings({ ...settings, theme: e.target.value })}
        />
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </Card>
    </div>
  );
};

export default Settings;
