insert into automoveis (name, year, type, price_per_day, image, description) select * from (values
('Toyota Corolla', 2021, 'Sedan', 150, 'https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_1280.jpg',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur porta neque, vel maximus nulla elementum sit amet. Fusce consectetur, lectus sit amet molestie ullamcorper, mauris ipsum convallis arcu, eu volutpat lacus elit a sapien.'),
('Honda Civic', 2022, 'Sedan', 170, 'https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur porta neque, vel maximus nulla elementum sit amet. Fusce consectetur, lectus sit amet molestie ullamcorper, mauris ipsum convallis arcu, eu volutpat lacus elit a sapien.')
) where not exists (select * from automoveis where id = 1 or id = 2);