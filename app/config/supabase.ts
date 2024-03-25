import {createClient} from '@supabase/supabase-js';

export const supabase = createClient(
    'https://oemfhiueijumizjmhtdy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbWZoaXVlaWp1bWl6am1odGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MzgxMzAsImV4cCI6MjAyNjQxNDEzMH0.q2mRMGYVgjfs_2MVOPgLy5mYcQRkwD1Mivfjipf0O40'
);