import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredApps = [
    {
      id: 1,
      name: 'PhotoMaster Pro',
      category: 'Фото и видео',
      rating: 4.8,
      downloads: '10M+',
      icon: '📷',
      gradient: 'from-purple-500 to-pink-500',
      price: 'Бесплатно',
      hasUpdates: true
    },
    {
      id: 2,
      name: 'TaskFlow',
      category: 'Производительность',
      rating: 4.9,
      downloads: '5M+',
      icon: '📋',
      gradient: 'from-blue-500 to-cyan-500',
      price: '299₽',
      hasUpdates: false
    },
    {
      id: 3,
      name: 'MusicWave',
      category: 'Музыка',
      rating: 4.7,
      downloads: '25M+',
      icon: '🎵',
      gradient: 'from-green-500 to-emerald-500',
      price: 'Бесплатно',
      hasUpdates: true
    },
    {
      id: 4,
      name: 'CodeEditor Plus',
      category: 'Разработка',
      rating: 4.6,
      downloads: '2M+',
      icon: '💻',
      gradient: 'from-orange-500 to-red-500',
      price: '599₽',
      hasUpdates: false
    },
    {
      id: 5,
      name: 'FitTracker',
      category: 'Здоровье',
      rating: 4.5,
      downloads: '8M+',
      icon: '💪',
      gradient: 'from-indigo-500 to-purple-500',
      price: 'Бесплатно',
      hasUpdates: true
    },
    {
      id: 6,
      name: 'DrawingPad',
      category: 'Творчество',
      rating: 4.4,
      downloads: '3M+',
      icon: '🎨',
      gradient: 'from-pink-500 to-rose-500',
      price: '199₽',
      hasUpdates: false
    }
  ];

  const categories = [
    { name: 'Популярные', icon: 'TrendingUp', count: 150 },
    { name: 'Игры', icon: 'Gamepad2', count: 89 },
    { name: 'Социальные сети', icon: 'Users', count: 45 },
    { name: 'Образование', icon: 'GraduationCap', count: 67 },
    { name: 'Бизнес', icon: 'Briefcase', count: 34 },
    { name: 'Развлечения', icon: 'Film', count: 78 }
  ];

  const recentDownloads = [
    { name: 'Instagram', time: '2 мин назад', status: 'Установлено' },
    { name: 'Telegram', time: '1 час назад', status: 'Обновлено' },
    { name: 'Spotify', time: '3 часа назад', status: 'Установлено' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AppStore Pro
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Поиск приложений..." 
                  className="pl-10 w-80 bg-white/50 border-white/30 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="bg-white/50 border-white/30 backdrop-blur-sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="outline" className="bg-white/50 border-white/30 backdrop-blur-sm">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Установи любое приложение
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Обнаруживай, устанавливай и управляй приложениями с автоматическими обновлениями и умными уведомлениями
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
                <Icon name="Download" className="mr-2" size={20} />
                Начать установку
              </Button>
              <Button variant="outline" className="border-2 border-purple-200 hover:bg-purple-50 px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-16">
        <Tabs defaultValue="apps" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/50 backdrop-blur-sm border border-white/30">
            <TabsTrigger value="apps" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Каталог приложений
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Категории
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              История загрузок
            </TabsTrigger>
            <TabsTrigger value="support" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              Поддержка
            </TabsTrigger>
          </TabsList>

          {/* Apps Tab */}
          <TabsContent value="apps" className="space-y-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredApps.map((app) => (
                <Card key={app.id} className="group hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/30 hover:scale-105 animate-scale-in">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                        {app.icon}
                      </div>
                      {app.hasUpdates && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                          <Icon name="ArrowUp" size={12} className="mr-1" />
                          Обновление
                        </Badge>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{app.name}</CardTitle>
                      <p className="text-sm text-gray-500">{app.category}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{app.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">{app.price}</span>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        <Icon name="Download" size={16} className="mr-2" />
                        Установить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Categories Tab */}
          <TabsContent value="categories" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border border-white/30 hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon name={category.icon as any} className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.count} приложений</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-8">
            <Card className="bg-white/70 backdrop-blur-sm border border-white/30">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="mr-2" />
                  Недавние загрузки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDownloads.map((download, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium">{download.name}</p>
                        <p className="text-sm text-gray-500">{download.time}</p>
                      </div>
                      <Badge variant={download.status === 'Установлено' ? 'default' : 'secondary'} 
                             className={download.status === 'Установлено' 
                               ? 'bg-green-100 text-green-700 border-green-200' 
                               : 'bg-blue-100 text-blue-700 border-blue-200'}>
                        {download.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-purple-200 hover:bg-purple-50">
                  <Icon name="MoreHorizontal" className="mr-2" />
                  Показать больше
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/70 backdrop-blur-sm border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MessageCircle" className="mr-2" />
                    Центр поддержки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                    <Icon name="HelpCircle" className="text-purple-600" />
                    <div>
                      <p className="font-medium">Часто задаваемые вопросы</p>
                      <p className="text-sm text-gray-500">Найдите ответы на популярные вопросы</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                    <Icon name="Mail" className="text-blue-600" />
                    <div>
                      <p className="font-medium">Связаться с поддержкой</p>
                      <p className="text-sm text-gray-500">Отправьте нам сообщение</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                    <Icon name="BookOpen" className="text-green-600" />
                    <div>
                      <p className="font-medium">Руководство пользователя</p>
                      <p className="text-sm text-gray-500">Изучите все возможности</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border border-white/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Settings" className="mr-2" />
                    Настройки уведомлений
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Автоматические обновления</p>
                      <p className="text-sm text-gray-500">Обновлять приложения автоматически</p>
                    </div>
                    <div className="w-12 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Уведомления о новых версиях</p>
                      <p className="text-sm text-gray-500">Получать уведомления о обновлениях</p>
                    </div>
                    <div className="w-12 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Еженедельный отчет</p>
                      <p className="text-sm text-gray-500">Статистика использования приложений</p>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 rounded-full cursor-pointer"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AppStore Pro
              </h3>
              <p className="text-gray-600 text-sm">
                Современная платформа для установки и управления приложениями с умными функциями.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Статус системы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Следите за нами</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
            © 2024 AppStore Pro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;