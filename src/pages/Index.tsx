import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const newsItems = [
    {
      id: 1,
      title: 'IV фестиваль "Стихия Пегаса"',
      date: '19 апреля 2025',
      category: 'Мероприятия',
      image: 'https://cdn.poehali.dev/files/f4a849d3-cb6c-488f-81fd-3e4c538de1d2.png',
    },
    {
      id: 2,
      title: 'КВН на сцене',
      date: '15 апреля 2025',
      category: 'Культура',
      image: 'https://cdn.poehali.dev/files/f4a849d3-cb6c-488f-81fd-3e4c538de1d2.png',
    },
    {
      id: 3,
      title: 'Киношкола для участников',
      date: '10 апреля 2025',
      category: 'Образование',
      image: 'https://cdn.poehali.dev/files/f4a849d3-cb6c-488f-81fd-3e4c538de1d2.png',
    },
    {
      id: 4,
      title: 'Награждение волонтёров',
      date: '5 апреля 2025',
      category: 'Новости',
      image: 'https://cdn.poehali.dev/files/f4a849d3-cb6c-488f-81fd-3e4c538de1d2.png',
    },
  ];

  const events = [
    { id: 1, title: 'Меры государственной поддержки работодателей в 2025 году', date: '2025-05-15' },
    { id: 2, title: 'Видеоролики по противодействию преступлениям', date: '2025-04-20' },
    { id: 3, title: 'Реабилитация для участников СВО', date: '2025-04-10' },
  ];

  const documents = [
    { id: 1, title: 'Устав организации', type: 'PDF', date: '2024-01-15' },
    { id: 2, title: 'Годовой отчёт 2024', type: 'PDF', date: '2024-12-20' },
    { id: 3, title: 'План мероприятий 2025', type: 'DOCX', date: '2025-01-10' },
  ];

  const navItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'about', label: 'О нас', icon: 'Info' },
    { id: 'info', label: 'Информация', icon: 'FileText' },
    { id: 'docs', label: 'Документы', icon: 'FolderOpen' },
    { id: 'events', label: 'Мероприятия', icon: 'Calendar' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <header className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Всероссийское общество инвалидов
                </h1>
                <p className="text-primary-foreground/80 text-sm md:text-base italic">
                  Вместе мы сможем больше!
                </p>
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'secondary' : 'ghost'}
                onClick={() => setActiveSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'text-white hover:bg-white/20'
                } transition-all duration-300`}
              >
                <Icon name={item.icon as any} size={18} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'main' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12">
              <div className="relative z-10">
                <Badge className="mb-4 bg-primary text-white">Добро пожаловать</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Как вступить в организацию
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                  За заслуги - награда. Присоединяйтесь к нашему сообществу и вместе
                  мы сделаем мир лучше для каждого.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Узнать подробнее
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Последние новости</h2>
                <Button variant="outline" onClick={() => setActiveSection('news')}>
                  Все новости
                  <Icon name="ChevronRight" size={18} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{item.category}</Badge>
                      <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-primary" />
                    Предстоящие мероприятия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.slice(0, 3).map((event) => (
                    <div
                      key={event.id}
                      className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium mb-2">{event.title}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        {new Date(event.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" className="text-primary" />
                    Важная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                    <h4 className="font-medium mb-2">
                      Меры государственной поддержки работодателей
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Всероссийская информация о социально-экономической ситуации в России
                    </p>
                    <Button variant="link" className="px-0 text-primary">
                      Подробнее
                      <Icon name="ExternalLink" size={14} className="ml-1" />
                    </Button>
                  </div>

                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-medium mb-2">Видеоролики по противодействию</h4>
                    <p className="text-sm text-muted-foreground">
                      Обучающие материалы и практические руководства
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Архив новостей</h2>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">Все новости</TabsTrigger>
                <TabsTrigger value="events">Мероприятия</TabsTrigger>
                <TabsTrigger value="culture">Культура</TabsTrigger>
                <TabsTrigger value="education">Образование</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6 mt-6">
                {newsItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge>{item.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {item.date}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription>
                            Члены общества инвалидов посетили открывающуюся в Северном гончарную
                            мастерскую. Экскурсия началась с небольшой лекции о традициях
                            гончарного промысла.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline">
                            Читать полностью
                            <Icon name="ArrowRight" size={16} className="ml-2" />
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">О нашей организации</h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>История создания</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Всероссийское общество инвалидов — общероссийская общественная организация,
                  созданная для защиты прав и интересов людей с ограниченными возможностями
                  здоровья. Наша миссия — создание равных возможностей для всех членов общества.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы работаем в различных направлениях: социальная поддержка, культурная
                  деятельность, образовательные программы, спортивные мероприятия и многое другое.
                  Вместе мы сможем больше!
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Users" size={32} className="text-primary mb-2" />
                  <CardTitle>15 000+</CardTitle>
                  <CardDescription>Активных участников</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Calendar" size={32} className="text-primary mb-2" />
                  <CardTitle>200+</CardTitle>
                  <CardDescription>Мероприятий ежегодно</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Award" size={32} className="text-primary mb-2" />
                  <CardTitle>30 лет</CardTitle>
                  <CardDescription>Опыта работы</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'docs' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Документы</h2>

            <div className="space-y-4">
              {documents.map((doc) => (
                <Card
                  key={doc.id}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.type} • {new Date(doc.date).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Download" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'events' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Мероприятия</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">Предстоящее</Badge>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {new Date(event.date).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      Зарегистрироваться
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Галерея</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden bg-secondary/30 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <img
                    src="https://cdn.poehali.dev/files/f4a849d3-cb6c-488f-81fd-3e4c538de1d2.png"
                    alt={`Галерея ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Контакты</h2>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Оренбург, ул. Краснознаменная, д. 56
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (3532) 77-00-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@voi-orenburg.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'info' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Информация</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Социальная поддержка</CardTitle>
                  <CardDescription>
                    Программы помощи и консультационные услуги для членов организации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Трудоустройство</CardTitle>
                  <CardDescription>
                    Помощь в поиске работы и защита прав работающих инвалидов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Образование</CardTitle>
                  <CardDescription>
                    Образовательные программы и курсы повышения квалификации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Творческая деятельность</CardTitle>
                  <CardDescription>
                    Кружки, студии и культурные мероприятия для всех желающих
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-foreground/5 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Users" className="text-primary" />
                О нас
              </h3>
              <p className="text-sm text-muted-foreground">
                Всероссийское общество инвалидов — общественная организация для защиты прав и
                интересов людей с ограниченными возможностями.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setActiveSection('news')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Новости
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('events')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Мероприятия
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('docs')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Документы
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('contacts')}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (3532) 77-00-00
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@voi-orenburg.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  г. Оренбург, ул. Краснознаменная, 56
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Всероссийское общество инвалидов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
