import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <img
            src="https://city21.ru/img/svg/logo.svg"
            alt="СИТИ21"
            className="h-16 w-auto"
          />
        </div>

        <nav className="hidden md:flex flex-col items-start space-y-4 space-x-0">
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-base"
          >
            Проекты
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-base"
          >
            Компания
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-base"
          >
            Новости
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-base"
          >
            Контакты
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-base"
          >
            Ещё +
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
            2024 №1 ДЕВЕЛОПЕР
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">+7 495 126 62 01</div>
            <div className="text-sm text-gray-600">Свяжитесь с нами</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center px-8 py-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-medium leading-tight font-aeroport">
              Социально
              <br />
              <span className="bg-green-400 px-2 py-1 text-black">
                ответственный
              </span>
              <br />
              девелопмент полного
              <br />
              цикла
            </h2>
          </div>

          <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3 rounded-full text-lg">
            Узнать больше
          </Button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative">
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Счастливая семья с ключами от новой квартиры"
              className="w-full h-96 object-cover rounded-lg"
            />

            {/* Green Info Block */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-green-400 p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-bold text-lg mb-2">
                Специальные
                <br />
                условия для жителей
                <br />
                мининполисов Сити21
              </h3>
              <div className="flex items-center space-x-2 mt-4">
                <span className="text-lg">Скидка до</span>
                <span className="bg-black text-white px-3 py-1 rounded-full text-xl font-bold">
                  30%
                </span>
              </div>
              <p className="text-sm mt-2">
                на покупку квартиры
                <br />в проекте Рафинад
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
                <Icon name="ChevronRight" size={24} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
                alt="Жилой комплекс"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">ЖК Рафинад</h3>
              <p className="text-gray-600">
                Современный жилой комплекс с развитой инфраструктурой
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop"
                alt="Коммерческая недвижимость"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Бизнес-центр</h3>
              <p className="text-gray-600">
                Офисные помещения класса А в центре города
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=250&fit=crop"
                alt="Торговый центр"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">ТЦ Сити Молл</h3>
              <p className="text-gray-600">
                Современный торгово-развлекательный центр
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
